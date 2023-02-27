from django.db import models

# Create your models here.

class Theme(models.Model):
    """Model for theme"""
    theme_number = models.TextField(null=False)
    theme_parent_id = models.IntegerField()
    theme_name = models.TextField(null=False)

    def __str__(self):
        return (self.theme_name, self.theme_number, self.theme_name)

class Rule(models.Model):
    """Model for theme"""
    theme_id = models.IntegerField()
    year = models.IntegerField(null=True)
    description = models.TextField(null=True)
    link_casebook = models.TextField(null=True)

    def __str__(self):
        return (self.theme_id, self.year, self.description, self.link_casebook)

class Question(models.Model):
    """Model for theme"""
    text = models.TextField()
    theme_id = models.IntegerField()
    image = models.TextField(null=True)
    video = models.TextField(null=True)
    rule_id = models.IntegerField()
    raisonnement = models.TextField(null=True)
    remarque = models.TextField(null=True)
    theme_parent_id = models.IntegerField()

    def __str__(self):
        return self.text

class Choice(models.Model):
    """Model for theme"""
    question_id = models.IntegerField()
    answer = models.TextField()
    points = models.FloatField(null=True)
    iscorrect = models.BooleanField()

    def __str__(self):
        return (self.answer, self.question_id, self.iscorrect)

# class Users(models.Model):
#     """Model for theme"""
#     derbyname = models.CharField(max_length=25)
#     email = models.CharField(max_length=255)
#     password = models.CharField(max_length=25)
#     team = models.CharField(max_length=50)
#     picture = models.TextField()
#     created_at = models.DateTimeField(auto_now=True)
#     color_app = models.TextField()
#     quizz_id = models.IntegerField()

#     def __str__(self):
#         return (self.derbyname, self.email, self.password, self.created_at)

# class Quiz(models.Model):
#     """Model for theme"""
#     user_id = models.IntegerField()
#     score = models.IntegerField()
#     created_at = models.DateTimeField(auto_now=True)
#     isminimumquiz = models.BooleanField()

#     def __str__(self):
#         return (self.user_id, self.score, self.created_at)

    # .createTable("theme", (table) => {
    #   table.increments("id").unsigned().primary();
    #   table.string("theme_number").unique().notNullable();
    #   table.integer("theme_parent_id");
    #   table.string("theme_name").notNull();
    # })
    # .createTable("rule", (table) => {
    #   table.increments("id").unsigned().primary();
    #   table.integer("theme_id").notNullable();
    #   table.integer("year");
    #   table.text("description");
    #   table.text("link_casebook");
    # })
    # .createTable("question", (table) => {
    #   table.increments("id").unsigned().primary();
    #   table.text("text").notNullable();
    #   table.integer("theme_id").notNullable();
    #   table.text("image");
    #   table.text("video");
    #   table.integer("rule_id").notNullable();
    #   table.text("raisonnement");
    #   table.text("remarque");
    #   table.text("theme_parent_id").notNullable();
    # })
    # .createTable("choice", (table) => {
    #   table.increments("id").unsigned().primary();
    #   table.integer("question_id").notNullable();
    #   table.text("answer");
    #   table.float("points");
    #   table.boolean("iscorrect");
    # })
    # .createTable("users", (table) => {
    #   table.increments("id").unsigned().primary();
    #   table.text("derbyname", 25).notNullable().unique();
    #   table.text("email").notNullable().unique();
    #   table.text("password").notNullable().unique();
    #   table.text("team", 50);
    #   table.text("picture");
    #   table.timestamp("created_at").defaultTo(knex.fn.now());
    #   table.text("color_app");
    #   table.integer("quiz_id");
    # })
    # .createTable("quiz", (table) => {
    #   table.increments("id").unsigned().primary();
    #   table.integer("user_id");
    #   table.integer("score");
    #   table.timestamp("created_at").defaultTo(knex.fn.now());
    #   table.integer("question_id");
    #   table.integer("choice_id");
    #   table.integer("rule_id");
    #   table.boolean("isminimumquiz");
    # });

