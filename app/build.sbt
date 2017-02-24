import play.PlayJava

name := """reembolso-app"""

version := "1.0"

scalaVersion := "2.11.1"

resolvers += "Crusader repository" at "http://nexus-crusader.rhcloud.com/nexus/content/repositories/releases/"

//resolvers += "Local Maven Repository" at "file://"+Path.userHome.absolutePath+"/.m2/repository/"
//resolvers += "Local Maven Repository" at "file://root/.m2/repository/"
//resolvers += "Local Maven Repository" at "file://home/gilberto/.m2/repository/"


libraryDependencies ++= Seq(
    //Hibernate
    "org.hibernate" % "hibernate-core" % "4.3.9.Final",
    "org.hibernate" % "hibernate-entitymanager" % "4.3.9.Final",
    "org.hibernate" % "hibernate-ehcache" % "4.3.9.Final",
    "org.hibernate" % "hibernate-validator" % "5.0.1.Final",
    "org.hibernate.javax.persistence" % "hibernate-jpa-2.1-api" % "1.0.0.Final",
    //QueryDsl
    "com.mysema.querydsl" % "querydsl-core" % "3.6.3",
    "com.mysema.querydsl" % "querydsl-jpa" % "3.6.3",
    "com.mysema.querydsl" % "querydsl-sql" % "3.6.3",
    "com.mysema.querydsl" % "querydsl-apt" % "3.6.3",
    //Commons
    "commons-io" % "commons-io" % "2.4",
    "commons-collections" % "commons-collections" % "3.2.1",
    "commons-beanutils" % "commons-beanutils" % "1.8.3",
    "commons-logging" % "commons-logging" % "1.1.1",
    "org.apache.commons" % "commons-math3" % "3.0",
    "org.apache.commons" % "commons-lang3" % "3.1",
    "org.apache.commons" % "commons-email" % "1.3.3",
    "org.apache.any23" % "apache-any23-encoding" % "1.1",
    "org.apache.commons" % "commons-csv" % "1.1",
    "com.google.guava" % "guava" % "13.0.1",
    "org.imgscalr" % "imgscalr-lib" % "4.2",
    //Reports
    "net.sf.jasperreports" % "jasperreports" % "5.5.0",
    "com.lowagie" % "itext" % "2.1.7",
    "org.javassist" % "javassist" % "3.15.0-GA",
    "org.xhtmlrenderer" % "flying-saucer-core" % "9.0.7",
    "org.xhtmlrenderer" % "flying-saucer-pdf" % "9.0.7",
    "com.itextpdf" % "itextpdf" % "5.0.6",
    "com.itextpdf.tool" % "xmlworker" % "5.5.4",
    //Template
    "org.freemarker" % "freemarker" % "2.3.19",
    //Jdbc
    "mysql" % "mysql-connector-java" % "5.1.28",
    //AWS
    "com.amazonaws" % "aws-java-sdk-s3" % "1.9.13",
    //Play
	  filters,
    jdbc,
    cache,
    javaCore,
    javaJdbc, 
    javaJpa
)

doc in Compile <<= target.map(_ / "none")

sources in (Compile,doc) := Seq.empty

publishArtifact in (Compile, packageDoc) := false

lazy val root = (project in file(".")).enablePlugins(PlayJava)