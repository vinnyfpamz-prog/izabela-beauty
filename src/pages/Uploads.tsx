import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileUpload } from "@/components/FileUpload";
import { UploadGallery } from "@/components/UploadGallery";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Uploads = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Gerenciar Uploads
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Envie e gerencie imagens de produtos, áudios de depoimentos e outros arquivos
              </p>
            </div>

            <Tabs defaultValue="gallery" className="space-y-8">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="gallery">Galeria</TabsTrigger>
                <TabsTrigger value="upload">Novo Upload</TabsTrigger>
              </TabsList>

              <TabsContent value="gallery">
                <UploadGallery />
              </TabsContent>

              <TabsContent value="upload">
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  <Card>
                    <CardHeader>
                      <CardTitle>Imagens de Produtos</CardTitle>
                      <CardDescription>
                        JPG, PNG ou WEBP até 5MB
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <FileUpload
                        bucket="product-images"
                        accept="image/jpeg,image/png,image/webp,image/jpg"
                        maxSize={5 * 1024 * 1024}
                      />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Áudios de Depoimentos</CardTitle>
                      <CardDescription>
                        OGG, MP3 ou WAV até 10MB
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <FileUpload
                        bucket="testimonial-audios"
                        accept="audio/ogg,audio/mpeg,audio/wav,audio/mp3"
                        maxSize={10 * 1024 * 1024}
                      />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Outros Arquivos</CardTitle>
                      <CardDescription>
                        Qualquer arquivo até 10MB
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <FileUpload
                        bucket="uploads"
                        maxSize={10 * 1024 * 1024}
                      />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Uploads;
