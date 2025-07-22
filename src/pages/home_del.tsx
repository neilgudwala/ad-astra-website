
      {/* Photographs of the Month */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-12 text-foreground">
          PHOTOGRAPHS OF THE MONTH
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {photographsOfMonth.map((photo, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <img 
                  src={photo.image} 
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-semibold text-sm">{photo.title}</h4>
                    <p className="text-xs text-gray-300">by {photo.photographer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Events */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-12 text-foreground">
          LATEST EVENTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="relative h-48">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-center">
                  <div className="font-bold text-xl">{event.date}</div>
                  <div className="text-xs uppercase">{event.month}</div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-foreground">{event.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to={event.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-12 text-foreground">
          OUR TEAM
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg text-foreground">{member.name}</h3>
              <p className="text-primary font-medium text-sm uppercase tracking-wide">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-8 text-foreground">
          ABOUT US
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Welcome to Ad Astra, the premier astronomy and astrophysics club dedicated to exploring 
          the infinite wonders of our universe. Founded by passionate students and guided by expert faculty, 
          we bring together curious minds to observe, research, and discover the cosmic phenomena that 
          surround us. From stargazing sessions to cutting-edge research projects, we're your gateway 
          to the stars.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Telescope className="h-5 w-5 text-primary" />
            <span>Regular Observations</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <BookOpen className="h-5 w-5 text-primary" />
            <span>Research Projects</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-5 w-5 text-primary" />
            <span>Community Events</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Rocket className="h-5 w-5 text-primary" />
            <span>Space Missions</span>
          </div>
        </div>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link to="/about">Learn More About Us</Link>
        </Button>
      </section>
      