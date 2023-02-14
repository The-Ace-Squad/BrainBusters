posts = [
  {
    id: 1
    user_id: 1
    post_title: "Week two assessment problem three code challenge"
    post_content: "Please share answer for problem three on week two assessment"
    category_tag: "assessments"
    create_date: 2023-02-14
  },
  {
    id: 2
    user_id: 2
    post_title: "Bo's Peanutbutter Noodles"
    post_content: "Hello Hotel Homies, I just realized I never sent over that recipe we spoke about the other day, so here it is!
    Bo's Spicy Peanut Butter Noodles:
    Ingredients:
    any noodles/pasta (I prefer knife cut egg noodles, udon is great too)
    your choice of protein (I think it tastes best w/ chicken thighs or tofu)
    your favorite soy sauce
    peanut butter (chunky or smooth)
    2-4 cloves of garlic (garlic powder is fine too)
    1/2 tablespoon of sugar (to balance all the saltiness)
    reserved pasta water (to thin out sauce)
    sesame oil
    sesame seeds
    cilantro
    gochugaru (Korean chili flakes)
    chili oil crisp
    **Omit the last five ingredients if you don't eat spicy, or if cilantro tastes like soap to you. Sesame oil and seeds are for garnish, but not required.
    Directions:
    Boil your pasta
    If using, cook your protein (I grill my chicken thighs in the air fryer)
    In a bowl, combine peanut butter, soy sauce, gochugaru, chopped garlic, chili oil crisp, sugar, and whisk together. Adjust to taste for preference. I use a ratio of 2:1 for the peanut butter and soy sauce, respectively, and 1 tablespoon of gochugaru
    If using, chop your cilantro for garnish
    Once pasta is done boiling, remove from heat, and combine to sauce bowl. Add a bit of reserved pasta water to thin out sauce. Toss noodles to combine with sauce.
    Top with your protein
    Sprinkle on top sesame seeds and cilantro (if using)
    Drizzle on sesame oil (a little goes a long way)
    Mix it altogether and ENJOY!"
    category_tag: "random"
    create_date: 2023-02-07
  }
]





posts.each do |each_post|
  post.create each_post
  puts "creating post #{each_post}"
end