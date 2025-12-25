import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Download, Image as ImageIcon, Music } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UploadedFile {
  name: string;
  path: string;
  url: string;
  created_at: string;
  size: number;
}

export const UploadGallery = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const loadFiles = async () => {
    try {
      const buckets = ["product-images", "testimonial-audios", "uploads"];
      const allFiles: UploadedFile[] = [];

      for (const bucket of buckets) {
        const { data, error } = await supabase.storage.from(bucket).list();

        if (!error && data) {
          const filesWithUrls = data.map((file) => {
            const { data: { publicUrl } } = supabase.storage
              .from(bucket)
              .getPublicUrl(file.name);

            return {
              name: file.name,
              path: `${bucket}/${file.name}`,
              url: publicUrl,
              created_at: file.created_at,
              size: file.metadata?.size || 0,
            };
          });

          allFiles.push(...filesWithUrls);
        }
      }

      setFiles(allFiles);
    } catch (error) {
      console.error("Error loading files:", error);
      toast({
        title: "Erro ao carregar arquivos",
        description: "Não foi possível carregar a lista de uploads",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFiles();
  }, []);

  const handleDelete = async (path: string) => {
    const [bucket, ...filePathParts] = path.split("/");
    const filePath = filePathParts.join("/");

    try {
      const { error } = await supabase.storage.from(bucket).remove([filePath]);

      if (error) throw error;

      toast({
        title: "Arquivo removido",
        description: "O arquivo foi excluído com sucesso",
      });

      loadFiles();
    } catch (error) {
      console.error("Delete error:", error);
      toast({
        title: "Erro ao remover",
        description: "Não foi possível excluir o arquivo",
        variant: "destructive",
      });
    }
  };

  const isImage = (fileName: string) => {
    return /\.(jpg|jpeg|png|gif|webp)$/i.test(fileName);
  };

  const isAudio = (fileName: string) => {
    return /\.(mp3|ogg|wav|m4a)$/i.test(fileName);
  };

  if (loading) {
    return <div className="text-center py-8">Carregando arquivos...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Arquivos Enviados</CardTitle>
      </CardHeader>
      <CardContent>
        {files.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">
            Nenhum arquivo enviado ainda
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {files.map((file) => (
              <Card key={file.path} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="aspect-square mb-3 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                    {isImage(file.name) ? (
                      <img
                        src={file.url}
                        alt={file.name}
                        className="w-full h-full object-cover"
                      />
                    ) : isAudio(file.name) ? (
                      <Music className="w-12 h-12 text-muted-foreground" />
                    ) : (
                      <ImageIcon className="w-12 h-12 text-muted-foreground" />
                    )}
                  </div>
                  <p className="text-sm font-medium truncate mb-2">
                    {file.name}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open(file.url, "_blank")}
                    >
                      <Download className="h-3 w-3 mr-1" />
                      Ver
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(file.path)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
