use bdblog;

INSERT INTO Category (name) VALUES
  ('Technology'),
  ('Travel'),
  ('Food'),
  ('Fashion'),
  ('Science'),
  ('Sport');

INSERT INTO Article (title, content, author, categoryId) VALUES
  ('Introduction to Artificial Intelligence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'John Doe', 1),
  ('Top 10 Places to Visit in 2024', 'Praesent volutpat odio nec justo ullamcorper, non varius elit feugiat.', 'Jane Smith', 2),
  ('Delicious Recipes for Summer', 'Curabitur eu leo euismod, ultrices metus at, facilisis velit.', 'Alice Johnson', 3),
  ('Win Super Cup of spain', 'Curabitur eu leo euismod, ultrices metus at, facilisis velit.', 'Vinicus Junior', 3),
  ('Latest Fashion Trends', 'Sed vitae libero a libero pulvinar ultricies vitae ut quam.', 'Robert Williams', 4),
  ('Advancements in Quantum Computing', 'Vestibulum a quam vel sapien varius consequat.', 'Emily Davis', 3),
  ('Amazing traveling love', 'Vestibulum a quam vel sapien varius consequat.', 'Melki', 2),
  ('Amazing holiday', 'a quam vel sapien varius consequat.', 'steeven', 5),
  ('How to be a rich people', 'a quam vel sapien varius consequat.', 'martinaise', 6);

INSERT INTO Comment (articleId, author, content) VALUES
  (1, 'Mike Brown', "Great article! Really informative."),
  (1, 'Sarah White', "I enjoyed reading about AI. Exciting stuff!"),
  (2, 'Alex Turner', "These places look amazing. Can\'t wait to travel!"),
  (3, 'Ella Martin', "Tried one of the recipes. Delicious!"),
  (4, 'Chris Wilson', "Fashion trends are always interesting."),
  (5, 'Grace Taylor', "Quantum computing is mind-blowing!"),
  (5, 'Melki', "What a good karting!"),
  (5, 'Martinaise', "Amazing post!"),
  (6, 'Natacha', "I realize my dream"),
  (7, 'Désiré', "I beleive to your writting"),
  (8, 'Freddy', "God Job friend!");