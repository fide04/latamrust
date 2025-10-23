import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DiscordLogo } from "@/components/icons";

export function Support() {
  return (
    <section id="support" className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
          Contact & Support
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Have questions or need help? Join our community.
        </p>
      </div>
      <Card className="text-center">
        <CardHeader>
          <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4 border border-primary/20">
            <DiscordLogo className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl">Join our Discord</CardTitle>
          <CardDescription className="text-base">
            For support, bug reports, and to connect with other players, our Discord server is the place to be.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild size="lg">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Join the Community
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
