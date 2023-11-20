// Chair Data Library

//   *** DATA FORMAT ***
// data = [
//     {
//         categories: "chairs",
//         items: [
//            {
//              name: '',
//              details:
//                {
//                   type: '',
//                   images: [],
//                   price: '',
//                   onsale: false,
//                   stock: 0,
//                   rating: {
//                      {
//                        stars: 0,
//                        reviews: 0
//                       },
//                    description: '',
//                    product_details: [],
//                    meterial:
//                        {
//                          frame:'',
//                          seat_cushion: '',
//                          others: ''
//                        }
//                  }
//              }
//          ]
//     }
//    ]

// For user Context - Data structure
// let { userInfo, useUserInfo } = useState({
//   userId: "",
//   name: "",
//   email: "",
//   password: "",
//   browsedItems: [
//     {
//       category: '',
//       categoryNameIndex: 0,
//       name: '',
//       chairNameIndex: 0,
//       rating:
//          {
//            stars: 0,
//            reviews: 0,
//          }
//       images: [],
//       onsale: false,
//       stock: 0,
//       price: 0,
//     },
//   ],
//   cartItems: [
//     {
//       category: "",
//       itemName: "",
//       quantity: 0,
//       price: 0,
//       totalPrice: 0,
//     },
//   ],
// });

const data = [
  {
    categories: "Chair",
    items: [
      {
        name: "OSTANO",
        details: {
          type: "Chair, deep green Remmarn/deep green",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 25.0,
          onsale: false,
          stock: 21,
          rating: {
            stars: 4,
            reviews: 14,
          },
          description:
            "Comfy and sturdy chair with a metal frame, a soft seat and a nice backrest with a curved shape. All in a timeless, neat design with a modern twist that takes up little room – and at a price that surprises!",
          product_details: [
            "With sofa-comfort feel, this chair can also serve as cosy extra seating in your bedroom, hallway, living room or wherever you would like a comfy spot to relax without taking up too much space.",
            "You can sit comfortably for a long time at the table since the angle of the backrest provides good lumbar support.",
            "Upholstered chair seat distributes your body weight and reduces pressure on the sitting bone.",
            "Simple to assemble since you avoid needing to wonder about which legs should face forward. They are all the same.",
            "Create a unified expression with several chairs of the same color or mix chairs of different colors.",
            "A slim design that blends in without taking up too much visual space in the room, yet sturdy enough to hold up to everyday activities.",
            "The chair stands firmly in place thanks to the metal underframe.",
          ],
          materials: {
            frame: "Steel, Epoxy/polyester powder coating",
            seat: "Layer-glued wood veneer, Polyurethane foam 2.2 lb/cu.ft., Non-woven polypropylene",
            backrest: "Polypropylene, Polyester wadding",
            base_fabric: "100 % polyester (100% recycled)",
          },
        },
      },

      {
        name: "ADDE",
        details: {
          type: "Chair, black",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
          ],
          price: 15.0,
          onsale: false,
          stock: 421,
          rating: {
            stars: 4.5,
            reviews: 635,
          },
          description:
            "You can stack the chairs, so they take less space when you're not using them.",
          product_details: [
            "Made of steel. Coated with epoxy/polyester powder coating.",
          ],
          materials: {
            leg_frame: "Steel, Epoxy/polyester powder coating",
            cross_rail: "Steel, Epoxy/polyester powder coating",
            seat: "Polypropylene",
            backrest: "Polypropylene",
          },
        },
      },
      {
        name: "LIDAS",
        details: {
          type: "Chair, white/Sefast white",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 55.0,
          onsale: false,
          stock: 53,
          rating: {
            stars: 4.5,
            reviews: 16,
          },
          description:
            "You sit comfortably thanks to the scooped seat and restful flexibility of the backrest. The material wipes clean in an instant. Choose your favorite color for a personal look or why not mix colors.",
          product_details: [
            "You decide the style of your chair. The seat shell is available in different colors, and the underframe SEFAST is available in white, black and chrome-plated colors.",
            "Easy assembly with only 4 screws.",
            "You can stack the chairs, so they take less space when you're not using them.",
            "You can revitalize with a new look at home by swapping the seat shell. SEFAST underframe works well with KARLPETTER or SIGTRYGG seat shells, sold separately.",
            "May be completed with FIXA self-adhesive floor protectors to protect the underlying surface against wear.",
          ],
          materials: {
            seat_shell: "Reinforced polypropylene",
            underframe: "Steel, Epoxy/polyester powder coating",
          },
        },
      },
      {
        name: "TEODORES",
        details: {
          type: "Chair, white",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 45.0,
          onsale: false,
          stock: 212,
          rating: {
            stars: 4.5,
            reviews: 251,
          },
          description:
            "A comfy chair that’s sturdy, yet lightweight and stackable too. An easy match with different tables and styles and eager to please, whether it’s in the dining room, in the entrance or by your bed.",
          product_details: [
            "The chair is easy to store when not in use, since you can stack up to 6 chairs on top of each other.",
          ],
          materials: {
            leg_frame: "Steel, Epoxy/polyester powder coating",
            cross_rail: "Steel, Epoxy/polyester powder coating",
            round_bar: "Steel, Epoxy/polyester powder coating",
            seat: "Polypropylene",
            backrest: "Polypropylene",
          },
        },
      },
      {
        name: "TOBIAS",
        details: {
          type: "Chair, clear/chrome plated",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 125.0,
          onsale: false,
          stock: 15,
          rating: {
            stars: 4,
            reviews: 481,
          },
          description:
            "A transparent chair that mirrors its surroundings. It picks up the colors of the room and appears to be floating. And because there’s flexibility in the seat, you may feel like you are floating too.",
          product_details: [
            "You sit comfortably thanks to the restful flexibility of the seat and back.",
          ],
          materials: {
            leg_frame: "Steel, Chrome plated",
            seat_shell: "Polycarbonate plastic",
            foot: "Polypropylene",
            nut: "Zinc, Chrome plated",
            bumpers: "Synthetic rubber",
            washers: "Synthetic rubber",
          },
        },
      },
      {
        name: "LINNEBACK",
        details: {
          type: "Chair, Orrsta olive-green",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
          ],
          price: 69.99,
          onsale: true,
          stock: 32,
          rating: {
            stars: 4.5,
            reviews: 45,
          },
          description:
            "Beautiful simplicity and a casual style. This flexible, versatile easy chair with an airy design adds a visual calmness to the room, while supporting both an active and a relaxed life at home.",
          product_details: [
            "LINNEBÄCK easy chair has a light, airy look and a low weight, which makes it simple to move around. Combine with other furniture and use in different situations and places at home.",
            "The cover in a muted pastel tone adds a visual calmness to the room and is easy to match with other décor.",
            "The powder-coated metal frame and cover are durable and easy to care for, making the easy chair a casual and flexible piece of furniture that you can enjoy for a long time.",
            "10 year Limited warranty. Read about the terms in the warranty brochure.",
          ],
          materials: {
            supporting_fabric: "100 % polypropylene",
            fabric: "65% polyester (min. 90% recycled), 35 % cotton",
            frame: "Steel, Epoxy/polyester powder coating",
            seat_cushion: "Polyurethane foam 1.5 lb/cu.ft.",
            backrest_cushion: "Polyurethane foam 2.2 lb/cu.ft., Polypropylene",
          },
        },
      },
      {
        name: "STEFAN",
        details: {
          type: "Chair, brown-black",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
          ],
          price: 40.0,
          onsale: false,
          stock: 98,
          rating: {
            stars: 4.5,
            reviews: 211,
          },
          description:
            "A sturdy chair with a solid wood construction that can handle the challenges of everyday life! Combines nicely with most styles, and if you’re looking for extra comfort, simply add a chair pad.",
          product_details: [
            "A sturdy and durable construction with solid hardwood chair frame.",
            "You sit comfortably thanks to the high back.",
            "The armless silhouette allows you to push these chairs right up to your table and save on floor space.",
            "For a softer seat or to add a personal touch to the room, complete with a chair pad in the style and color of your choice.",
          ],
          materials: {
            total_composition: "Solid pine, Stain, Clear acrylic lacquer",
          },
        },
      },
      {
        name: "KARLPETTER",
        details: {
          type: "Chair, Gunnared medium gray/Sefast black",
          images: ["img1.avif", "img2.avif", "img3.avif", "img4.avif"],
          price: 75.0,
          onsale: false,
          stock: 93,
          rating: {
            stars: 4.5,
            reviews: 21,
          },
          description:
            "This upholstered chair provides a cozy layer of comfort while working, crafting or dining. Choose your favorite color to give your room a personal look.",
          product_details: [
            "You decide the style of your chair. The seat shell is available in different colors, and the underframe SEFAST is available in white, black and chrome-plated colors.",
            "Easy assembly with only 4 screws.",
            "You can revitalize with a new look at home by swapping the seat shell. SEFAST underframe works well with LIDÅS or SIGTRYGG seat shells, sold separately.",
            "May be completed with FIXA self-adhesive floor protectors to protect the underlying surface against wear.",
          ],
          materials: {
            seat_shell_fabric: "100% polyester (min. 90% recycled)",
            seat_shell: "Layer-glued wood veneer",
            comfort_filling:
              "Polyurethane foam 2.2 lb/cu.ft., Polyester wadding",
            zipper: "100 %polyester",
            cover: "100 %polyester",
            underframe: "Steel, Epoxy/polyester powder coating",
          },
        },
      },
      {
        name: "ODGER",
        details: {
          type: "Chair, anthracite",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
          ],
          price: 125.0,
          onsale: false,
          stock: 45,
          rating: {
            stars: 4.5,
            reviews: 279,
          },
          description:
            "The chair’s moulded shell gives a comfortable, flexy feel that is yours to enjoy after a simple 3-click assembly. For strength and beauty, the wood is mixed into the charcoal grey plastic, looking like decorative sprinkles.",
          product_details: [
            "Have a seat and stay a while - the friendly, embracing curves and flexy material make this chair nice and comfy.",
            "No tools are required to assemble the chair, you just click it together with a simple mechanism under the seat.",
            "The wood fiber/plastic composite material gives the chair a textured, matte surface that is soft and inviting to the touch.",
            "Viewed from afar, the wood fibers blend into the surface, up close they become an interesting design feature that catches the eye.",
          ],
          materials: {
            seat_shell: "Wood Plastic Composite",
            leg_frame: "Wood Plastic Composite",
            handle: "Polypropylene",
            feet: "Synthetic rubber",
          },
        },
      },
      {
        name: "VOXLOV",
        details: {
          type: "Chair, light bamboo",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
            "img7.avif",
          ],
          price: 125.0,
          onsale: false,
          stock: 48,
          rating: {
            stars: 5,
            reviews: 25,
          },
          description:
            "A gift from nature, shaped and bent for optimal beauty and comfort. The sturdy frame is made of durable bamboo, and handwoven paper twine creates a strong seat with a resilient feel when you sit on it.",
          product_details: [
            "Angled back as well as generously sized and curved seat/back offer restful support and comfort while eating, writing, or doing paperwork.",
            "Made of strong handwoven paper twine and durable bamboo from more sustainable sources, adding warmth and natural beauty wherever you choose to use it.",
            "Paper twine weaving technique has been used for years in furniture making and is known for its great strength as well as the supportive, flexible feeling when you sit in it.",
          ],
          materials: {
            side_frame: "Bamboo, Adhesive, Tinted clear acrylic lacquer",
            cross_rail: "Bamboo, Adhesive, Tinted clear acrylic lacquer",
            seat: "Steel, Paper, Epoxy/polyester powder coating, Clear acrylic lacquer",
            backrest:
              "Steel, Paper, Epoxy/polyester powder coating, Clear acrylic lacquer",
          },
        },
      },
      {
        name: "KLINTEN",
        details: {
          type: "Chair, brown/Kilanda light beige",
          images: ["img1.avif", "img2.avif", "img3.avif", "img4.avif"],
          price: 115.0,
          onsale: false,
          stock: 53,
          rating: {
            stars: 5,
            reviews: 12,
          },
          description:
            "You’ll linger longer on this fully upholstered chair with a thick-padded seat and a high, soft back. Comes in several colours – feel free to mix and create a dining area style that feels warm and inviting.",
          product_details: [
            "Dine in style and comfort. This upholstered chair is perfect for long meals, spending precious moments with family and friends or for indulging in some relaxing me-time.",
            "With sofa-comfort feel, this chair can also serve as cozy extra seating in your bedroom, hallway, living room or wherever you would like a comfy spot to relax without taking up too much space.",
            "The chair cover comes in one piece and secures in place with hook-and-loop fasteners so you can easily remove it and put it back on again.",
            "You can sit comfortably for a long time at the table since the angle of the backrest provides good lumbar support.",
            "Upholstered chair seat distributes your body weight and reduces pressure on the sitting bone.",
            "Create a unified expression with several chairs of the same color or mix chairs of different colors.",
            "The cover is easy to keep clean as it is removable and machine washable.",
          ],
          materials: {
            fabric: "100% polyester (min. 90% recycled)",
            leg_frame:
              "Steel, Epoxy/polyester powder coating, Solid birch, Tinted lacquer",
            support_rail: "Steel, Epoxy/polyester powder coating",
            back: "Steel, Epoxy/polyester powder coating",
            seat_and_back_frame: "Poplar plywood, Non-woven polypropylene",
            seat_cushion:
              "100 % polyester - hollow fiber (100% recycled), Polyester wadding, High-resilience polyurethane foam (cold foam) 2.2 lb/cu.ft., Non-woven polypropylene",
            backrest_cushion:
              "100 % polyester - hollow fiber (100% recycled), Non-woven polypropylene",
            cushion_cover: "100 %polyester",
            zipper: "100 % polyester",
          },
        },
      },
      {
        name: "NOLMYRA",
        details: {
          type: "Chair, birch veneer/gray",
          images: ["img1.avif", "img2.avif", "img3.avif", "img4.avif"],
          price: 54.99,
          onsale: true,
          stock: 23,
          rating: {
            stars: 4.5,
            reviews: 159,
          },
          description:
            "NOLMYRA easy chair re-imagines comfort with mesh fabric stretched over the frame, making the need for foam unnecessary. The result is an elegantly engineered lounge chair at a low price.",
          product_details: [
            "The armchair is lightweight and easy to move if you want to clean the floor or rearrange the furniture.",
            "10-year limited warranty. Read about the terms in the limited warranty brochure.",
          ],
          materials: {
            total_composition: "100 % polyester",
            layer_glued_frame: "Birch veneer, Clear acrylic lacquer",
            seat_frame: "Steel, Epoxy/polyester powder coating",
          },
        },
      },
      {
        name: "FROSET",
        details: {
          type: "Chair, white stained oak veneer",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 124.99,
          onsale: true,
          stock: 20,
          rating: {
            stars: 4.5,
            reviews: 50,
          },
          description:
            "This easy chair makes us believe in love at first sight, with its clean Scandinavian lines and airy expression. Smart production minimizes environmental impact and price – and maximizes acessibility!",
          product_details: [
            "Comfort is built into the geometry of this easy chair – the generous and slightly bent seat, the rounded shape of the backrest and the angle between them that helps you to sit relaxed.",
            "FRÖSET easy chair has a timeless and stylish Scandinavian design and is manufactured in a smart way to keep the price down, so it is suitable for many different homes and people.",
            "A sustainable choice since FRÖSET easy chair is durable, made entirely of layer-glued wood and optimally packaged to minimize environmental impact when transported.",
            "10-year limited warranty. Read about the terms in the limited warranty brochure.",
          ],
          materials: {
            total_composition:
              "Molded layer-glued wood veneer with surface of, Oak veneer, Tinted clear acrylic lacquer",
          },
        },
      },
      {
        name: "SIGTRYGG",
        details: {
          type: "Chair, dark brown/Sefast black",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
          ],
          price: 70.0,
          onsale: false,
          stock: 65,
          rating: {
            stars: 4,
            reviews: 13,
          },
          description:
            " This chair is shaped for your comfort and wellbeing with good lumbar support and restful flexibility of the backrest. Available in different wood veneer finishes to suit your taste and other furniture.",
          product_details: [
            "You decide the style of your chair. The seat shell is available in different colors, and the underframe SEFAST is available in white, black and chrome-plated colors.",
            "Easy assembly with only 4 screws.",
            "You can stack the chairs, so they take less space when you're not using them.",
            "You can revitalize with a new look at home by swapping the seat shell. SEFAST underframe works well with KARLPETTER or LIDÅS seat shells, sold separately.",
            "May be completed with FIXA self-adhesive floor protectors to protect the underlying surface against wear.",
          ],
          materials: {
            seat_shell:
              "Layer-glued wood veneer, Ash veneer, Stain, Clear acrylic lacquer",
            underframe: "Steel, Epoxy/polyester powder coating",
          },
        },
      },
      {
        name: "MANHULT",
        details: {
          type: "Chair, black/Hakebo yellow-brown",
          images: ["img1.avif", "img2.avif", "img3.avif", "img4.avif"],
          price: 85.0,
          onsale: false,
          stock: 58,
          rating: {
            stars: 5,
            reviews: 15,
          },
          description:
            "Here you sit comfy on a sturdy metal frame where the seat and backrest look like thin chocolate wafers covered with a durable velvet fabric. Just as enticing as candy and simple to assemble. What a combination!",
          product_details: [
            "Here you sit comfy on a sturdy metal frame where the seat and backrest look like thin chocolate wafers covered with a durable velvet fabric. Just as enticing as candy and simple to assemble. What a combination!",
          ],
          materials: {
            leg_frame: "Steel, Epoxy/polyester powder coating",
            support_rail: "Steel, Steel, Epoxy/polyester powder coating",
            back: "Steel, Steel, Epoxy/polyester powder coating",
            seat_and_back_frame: "Poplar plywood",
            seat_foam: "Polyurethane foam.",
            back_foam:
              "High resilient polyurethane foam (cold foam)., Polyurethane foam.",
            protective_fabric: "100 % polypropylene",
            fabric: "100 % polyester",
            feet: "Polyamide",
          },
        },
      },
      {
        name: "ALVSTA",
        details: {
          type: "Chair, handmade rattan/Sefast white",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 95.0,
          onsale: false,
          stock: 41,
          rating: {
            stars: 4.5,
            reviews: 8,
          },
          description:
            "Invite nature to your table and sit down in this comfortable and lightweight chair in rattan. Each chair is handwoven, unique and shaped so you enjoy nice support – even during those long dinners.",
          product_details: [
            "Made of strong handwoven rattan from sustainable sources and adds a warm, natural beauty wherever you choose to place it.",
            "The rattan weaving technique has been used in chair manufacturing for many years and is appreciated for its carrying capacity and its supportive, flexible feel when you sit on the chair.",
            "You sit comfortably thanks to the restful flexibility of the scooped seat and shaped back.",
            "You can stack the chairs, so they take less space when you're not using them.",
          ],
          materials: {
            seat_frame: "Steel, Epoxy/polyester powder coating",
            body: "Rattan, Clear acrylic lacquer",
            underframe: "Steel, Epoxy/polyester powder coating",
          },
        },
      },
    ],
  },
  {
    categories: "Bar Stool",
    items: [
      {
        name: "BERGMUND",
        details: {
          type: 'Bar stool with backrest, black/Gunnared medium gray, 24 3/8"',
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
            "img7.avif",
          ],
          price: 145.0,
          onsale: false,
          stock: 16,
          rating: {
            stars: 5,
            reviews: 58,
          },
          description:
            "Bar stools in the BERGMUND series offer cushiony comfort and many cover options, like this one in an elegant gray. After engaging meals and after-dinner chit-chat, it’s good to know it’s washable.",
          product_details: [
            "The upholstery of the bar stool consists of straight polyester fibres with small gaps between them, providing comfy elasticity and better ventilation so you enjoy a pleasant temperature when sitting.",
            "The seat's bowl-shaped bottom is adapted for your sit bones and those of most of the world's population. And with an innovative technique, the seat's padding is shaped to maximize your comfort.",
            "The backrest has a built-in lumbar support and the angle between the seat and the backrest that is optimally adapted to make it comfortable for you to sit a little longer at the table.",
            "You decide the style of your bar stool. BERGMUND is available with white and black chair legs, and the tailor-made covers are available in many different models, colors and materials.",
            "The cover is easy to keep clean as it is removable and can be washed.",
            "The cover comes in one piece and fixes in place with hook-and-loop fasteners so you can easily pull it off and put it back on again.",
            "With footrest for relaxed sitting posture.",
          ],
          materials: {
            leg: "Solid wood, Stain, Clear acrylic lacquer",
            seat_frame: "Steel, Epoxy/polyester powder coating",
            backrest_frame: "Steel",
            support_panel: "Polyethylene",
            backrest_cushion: "100 % polyester",
            seat_cushion: "100 % polyester",
            lining: "Polyester wadding",
            back_fabric: "100 % polyester (100% recycled)",
            total_composition: "100 %polyester",
          },
        },
      },
      {
        name: "INGOLF",
        details: {
          type: 'Bar stool with backrest, white, 24 3/4 "',
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 95.0,
          onsale: false,
          stock: 27,
          rating: {
            stars: 4.5,
            reviews: 699,
          },
          description:
            " Why not have the same style throughout your home? INGOLF series looks just as nice in the kitchen and dining room as in the bedroom or hallway. The solid wood construction holds up well.",
          product_details: ["Footrest for extra sitting comfort."],
          materials: {
            frame: "Solid wood, Adhesive",
            seat: "Fiberboard",
            backrest: "Fiberboard",
            all_parts: "Acrylic pain",
          },
        },
      },
      {
        name: "STIG",
        details: {
          type: 'Bar stool with backrest, black/black, 24 3/4"',
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
          ],
          price: 249.0,
          onsale: false,
          stock: 11,
          rating: {
            stars: 4.5,
            reviews: 40,
          },
          description:
            "This comfy bar stool/counter stool is the perfect height for lazy breakfasts, casual meals or snacks at the counter or kitchen island. Made of easy-care materials so occasional spills are easy to wipe off.",
          product_details: [
            "Stackable, so you can keep several on hand without taking up more space than one bar stool.",
            "Comfy footrest enables a relaxed sitting posture.",
          ],
          materials: {
            frame: "Steel, Epoxy powder coating",
            seat: "Polypropylene",
            back: "Polypropylene",
          },
        },
      },
      {
        name: "JANINGE",
        details: {
          type: 'Bar stool, white, 29 7/8 "',
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
            "img7.avif",
          ],
          price: 155.0,
          onsale: false,
          stock: 31,
          rating: {
            stars: 4.5,
            reviews: 194,
          },
          description:
            "Challenged to solve the equation of combining design, function and quality in one chair, our designers came up with JANINGE chair. Durable enough for restaurant use – with a design you want to take home.",
          product_details: [
            "You sit comfortably thanks to the scooped seat.",
            "Easy to adjust in heights using one hand.",
            "With footrest for relaxed sitting posture.",
            "A special surface treatment makes the seat extra scratch resistant.",
          ],
          materials: {
            base: "Steel, Epoxy/polyester powder coating",
            outer_tube: "Steel, Epoxy/polyester powder coating",
            mounting_plate: "Steel, Epoxy/polyester powder coating",
            cover: "Stainless steel",
            adjustment_lever: "Stainless steel",
            foot_ring: "Polypropylene",
            stop_fitting: "Polypropylene",
            ring: "Polyamide",
            foot_rest:
              "Aluminum, Stainless steel, Epoxy/polyester powder coating",
            seat: "Reinforced polypropylene",
            lid: "Reinforced polypropylene",
          },
        },
      },
      {
        name: "LILLANAS",
        details: {
          type: 'Bar stool, chrome plated/Gunnared dark gray, 29 7/8"',
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 125.0,
          onsale: false,
          stock: 22,
          rating: {
            stars: 3,
            reviews: 12,
          },
          description:
            "LILLÅNÄS bar stool in grey offers modern appeal and comfort for all-day activities with a padded seat shaped to reduce pressure and a relaxing footrest. The worry-free cover is removable for washing.",
          product_details: [
            "Comfy footrest enables a relaxed sitting posture.",
            "The upholstered seat and comfortable angle of the backrest make the bar stool perfect for long dinners.",
            "The metal frame provides comfortable resilience.",
            "The cover is easy to keep clean as it is removable and machine washable.",
          ],
          materials: {
            seat_shell: "Layer-glued wood veneer",
            leg_frame: "Steel, Chrome plated",
            footrest: "Steel, Chrome plated",
            upholstery_material: "100 % polyester, Polyester wadding",
            foot: "Polyamide",
            hook_and_loop_fastener: "100 % nylon",
            lining: "Non-woven polypropylene",
            fabric: "100% polyester (min. 90% recycled)",
          },
        },
      },
      {
        name: "SEGERON",
        details: {
          type: 'Bar stool, outdoor, white/beige, 28 3/4"',
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 120.0,
          onsale: false,
          stock: 36,
          rating: {
            stars: 5,
            reviews: 1,
          },
          description:
            "Create a dining or lounging area for your balcony, patio, terrace or garden. The flexible SEGERÖN outdoor furniture series is designed for outdoor life and all types of weather, climates and activities.",
          product_details: [
            "This product is durable and easy to care for, since it’s made of a powder-coated steel frame and rope that is handwoven onto the product.",
            "This comfortable seating allows you to enjoy many pleasant moments outdoors since the durable materials withstand both weather and wind.",
            "Tested and approved for use in public areas, such as restaurants, so you can trust it is hardwearing and stands up to extensive, everyday use.",
          ],
          materials: {
            seat_frame: "Steel, Steel, Polyester powder coating",
            rope: "100 % polyester",
            leg: "Steel, Polyester powder coating",
            footrest: "Steel, Polyester powder coating",
          },
        },
      },
      {
        name: "GLENN",
        details: {
          type: 'Bar stool, white/chrome plated, 26"',
          images: ["img1.avif", "img2.avif", "img3.avif", "img4.avif"],
          price: 105.0,
          onsale: false,
          stock: 62,
          rating: {
            stars: 4.5,
            reviews: 118,
          },
          description:
            "A comfortable bar stool with clean lines in white and chrome. If you have several you can stack them – handy when it's time to sweep the floor or if you just want some more floor space.",
          product_details: [
            "The stool can be stacked, so you can keep several on hand and store them in the same space as one.",
          ],
          materials: {
            leg_frame: "Steel, Chrome plated",
            feet: "Polypropylene",
            seat_shell: "Polycarbonate plastic",
            bumpers: "Polyethylene",
            insert: "Brass",
          },
        },
      },
      {
        name: "NILSOLLE",
        details: {
          type: 'Bar stool, birch, 29"',
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 80.0,
          onsale: false,
          stock: 88,
          rating: {
            stars: 4,
            reviews: 11,
          },
          description: "Easy to move thanks to the hole in the seat.",
          product_details: ["Solid wood is a durable natural material."],
          materials: {
            leg: "Solid birch, Adhesive, Stain, Tinted clear acrylic lacquer",
            seat: "Solid birch, Adhesive, Stain, Tinted clear acrylic lacquer",
            footrest: "Steel, Galvanized",
          },
        },
      },
      {
        name: "FANBYN",
        details: {
          type: 'Bar stool with backrest, white/indoor/outdoor, 25 1/4"',
          images: ["img1.avif"],
          price: 140.0,
          onsale: false,
          stock: 39,
          rating: {
            stars: 4,
            reviews: 9,
          },
          description:
            "With its softly shaped seat and armrests, this bar stool provides comfy support for both your back and arms – and makes it ideal for long dinners at the bar table.",
          product_details: [
            "You sit comfortably thanks to the shaped back and armrests.",
            "Stands firm without damaging the floor since the ends of the legs are covered with rubber.",
          ],
          materials: {
            seat_shell: "Polypropylene",
            barstool_frame: "Solid eucalyptus wood, Acrylic stain",
          },
        },
      },
      {
        name: "NORDVIKEN",
        details: {
          type: 'Bar stool with backrest, black, 24 3/8"',
          images: ["img1.avif", "img2.avif", "img3.avif"],
          price: 95.0,
          onsale: false,
          stock: 40,
          rating: {
            stars: 4.5,
            reviews: 79,
          },
          description:
            "NORDVIKEN counter-height stool with a deepening in the seat and curved backrest will keep you comfortably seated for long conversations at the kitchen island. The look is easy to combine in any kitchen.",
          product_details: [
            "The stool height is perfect for kitchen islands and works great as additional seating in your kitchen.",
            "The backrest and the curved shape of the bar stool, provide good lower back support and prevent your back from getting tired. You sit comfortably, longer and with a relaxed posture.",
            "The deepening in the chair seat distributes the weight over the area of the chair and reduces the pressure on the sitting bone.",
            "Solid wood chair frame makes the construction durable and very sturdy.",
            "Footrest for extra sitting comfort.",
          ],
          materials: {
            leg: "Solid pine, Stain, Clear acrylic lacquer",
            rail: "Solid pine, Stain, Clear acrylic lacquer",
            seat: "Layer-glued wood veneer, Ash veneer, Layer-glued wood veneer, Stain, Clear acrylic lacquer",
          },
        },
      },
      {
        name: "GRASALA",
        details: {
          type: 'Bar stool, gray, 24 3/8"',
          images: ["img1.avif", "img2.avif", "img3.avif", "img4.avif"],
          price: 55.0,
          onsale: false,
          stock: 114,
          rating: {
            stars: 4,
            reviews: 2,
          },
          description:
            "This counter height bar stool combines a modern expression with good comfort in a sturdy yet neat design that’s both durable and pleasing to the eye. Assembles in no time - but the strong construction will last.",
          product_details: [
            "This bar stool has a slim design that blends in without taking up too much visual space in the room. Lightweight yet sturdy enough to hold up to everyday activities.",
            "There is no backrest so you can sit comfortably on either side of the bar stool and store it under the bar table when not in use.",
            "The generously sized and curved seat offers comfort while eating, playing board games or doing paperwork.",
            "The footrest enables a comfy and relaxed sitting posture.",
            "Padded seat for increased sitting comfort.",
            "Available as bar stool or as a lower counter-height stool suitable for kitchen counters or kitchen islands.",
          ],
          materials: {
            fabric: "100% polyester (min. 90% recycled)",
            leg_frame: "Steel, Epoxy/polyester powder coating",
            cross_rail: "Steel, Epoxy/polyester powder coating",
            footrest: "Steel, Epoxy/polyester powder coating",
            seat: "Layer-glued wood veneer",
            seat_foam: "Polyurethane foam 2.2 lb/cu.ft.",
            protective_fabric: "Non-woven polypropylene ",
          },
        },
      },
      {
        name: "FRANKLIN",
        details: {
          type: 'Bar stool with backrest, foldable, black/black, 24 3/4"',
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
            "img7.avif",
          ],
          price: 45.0,
          onsale: false,
          stock: 213,
          rating: {
            stars: 4.5,
            reviews: 315,
          },
          description:
            "Simple to fold up, easy to stow away. This bar stool in neutral black is always at hand when you need a few extra seats around the bar table, countertop or kitchen island.",
          product_details: [
            "You can fold the chairs, so they take less space when you're not using them.",
            "Footrest for extra sitting comfort.",
            "The plastic feet allow the chair to stand evenly and reduces the risk of pressure marks on a soft floor.",
            "The built-in safety lock prevents the bar stool from accidentally folding up when you move it.",
          ],
          materials: {
            seat_and_back:
              "Layer-glued wood veneer, Oak veneer, Stain, Clear acrylic lacquer",
            tubular_frame: "Steel, Epoxy/polyester powder coating",
          },
        },
      },
      {
        name: "RONNINGE",
        details: {
          type: 'Bar stool, birch, 29 1/2"',
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 110.0,
          onsale: false,
          stock: 41,
          rating: {
            stars: 5,
            reviews: 5,
          },
          description:
            "Enjoy a meal with a view at bar height. The light Scandinavian expression goes perfectly with other furniture in the RÖNNINGE series and the robust construction is ideal for home and public use.",
          product_details: [
            "The generously sized and curved seat offers comfort while eating, playing board games or doing paperwork.",
            "There is no backrest so you can sit comfortably on either side of the bar stool and store it under the bar table when not in use.",
            "Combine several bar stools of the same color to create a unified expression or mix colors for a playful look.",
            "RÖNNINGE bar stool is made of birch which gives it a genuine feel and a hardwearing surface that will last for years and grow more graceful with age",
            "A stable construction in solid wood and hardwood veneer that makes each bar stool unique, with varying grain patterns and natural color shifts that are part of the charm of wood.",
            "For a softer seat or to add a personal touch to the room, complete with a chair pad in the style and color of your choice.",
            "The footrest enables a comfy and relaxed sitting posture.",
            "The metal on the footrest protects it from wearing.",
          ],
          materials: {
            side_frame: "Solid birch, Tinted lacquer",
            cross_rail: "Solid birch, Tinted lacquer",
            seat: "Layer-glued wood veneer, Birch veneer, Tinted lacquer",
          },
        },
      },
      {
        name: "EKEDALEN",
        details: {
          type: 'Bar stool with backrest, white/Orrsta light gray, 24 3/8"',
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
          ],
          price: 105.0,
          onsale: false,
          stock: 62,
          rating: {
            stars: 4.5,
            reviews: 70,
          },
          description:
            "Big, bigger, biggest - our super comfy EKEDALEN chairs keep the conversation going until you ask the guests to leave. Available in 3 heights for a perfect match with EKEDALEN bar table or dining table.",
          product_details: [
            "The stool height is perfect for kitchen islands and works great as additional seating in your kitchen.",
            "The upholstered seat and comfortable angle of the backrest make the bar stool perfect for long dinners.",
            "The cover is easy to remove, machine wash and put back on again.",
            "You can choose from several different seat covers and switch between them when you like.",
            "Solid wood chair frame makes the construction durable and very sturdy.",
            "Footrest for extra sitting comfort.",
          ],
          materials: {
            fabric_cover: "65% polyester (min. 90% recycled), 35 % cotto",
            frame: "Solid eucalyptus wood, Stain, Clear acrylic lacquer",
            seat: "Fiberboard, Polyurethane foam 2.2 lb/cu.ft.",
            protective_fabric: "Polyester wadding",
          },
        },
      },
      {
        name: "NAMMARO",
        details: {
          type: "Bar stool, outdoor, light brown stained",
          images: ["img1.avif", "img2.avif", "img3.avif", "img4.avif"],
          price: 70.0,
          onsale: false,
          stock: 94,
          rating: {
            stars: 5,
            reviews: 3,
          },
          description:
            "Create a comfy living room feel outdoors with NÄMMARÖ series. With everything you need for chill moments, long dinners and cheerful summer parties, no matter if you have a balcony, terrace or garden.",
          product_details: [
            "The furniture is made of acacia, a naturally durable and sturdy hardwood because of the high density of its wood fibers.",
            "Combine the outdoor furniture in NÄMMARÖ series as you like and create a coordinated outdoor space where you can eat, rest and spend time with family and friends.",
            "The timeless design makes the series easy to place and suitable for many different environments.",
            "The furniture has been pre-treated to be better protected against sun, rain, stains and other wear and tear.",
            "Made from durable and renewable acacia from more sustainable sources",
          ],
          materials: {
            total_composition: "Solid acacia wood, Acrylic stain",
          },
        },
      },
      {
        name: "YNGVAR",
        details: {
          type: 'Bar stool, anthracite, 29 1/2"',
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
          ],
          price: 155.0,
          onsale: false,
          stock: 72,
          rating: {
            stars: 5,
            reviews: 12,
          },
          description:
            "The soft and rounded back support feels like a nice embrace and makes the bar stool easy to hang on the table edge when it’s time to clean up.",
          product_details: [
            "The soft and rounded back support feels like a nice embrace and makes the bar stool easy to hang on the table edge when it’s time to clean up.",
            "Product details: Durable and sturdy, meeting the requirements on furniture for public use.",
            "You sit comfortably thanks to the generous size and the soft rounded shape of the seat and back support.",
            "Hang the bar stool on the table to clear the floor space for easy cleaning.",
            "The clean, simple design is easy to place in a restaurant, café or quick seating zone.",
          ],
          materials: {
            leg: "Steel, Epoxy/polyester powder coating",
            back_frame: "Steel, Epoxy/polyester powder coating",
            crossbar: "Steel, Epoxy/polyester powder coating",
            foot_rest: "Steel, Epoxy/polyester powder coating",
            seat: "Layer-glued wood veneer, Beech veneer, Stain, Clear acrylic lacquer",
            backrest:
              "Layer-glued wood veneer, Beech veneer, Stain, Clear acrylic lacquer",
          },
        },
      },
      {
        name: "HANSOLLE",
        details: {
          type: 'Bar stool, black-brown, 26"',
          images: ["img1.avif", "img2.avif", "img3.avif", "img4.avif"],
          price: 170.0,
          onsale: false,
          stock: 22,
          rating: {
            stars: 5,
            reviews: 18,
          },
          description:
            "Sit back and enjoy your dinner at the bar table. With an upholstered seat and back, this stool provides extra nice seating comfort.",
          product_details: [
            "The chair has a timeless expression and will endure many years of use.",
            "The backrest and the curved shape of the bar stool, provide good lower back support and prevent your back from getting tired. You sit comfortably, longer and with a relaxed posture.",
          ],
          materials: {
            total_composition: "66% cotton, 34 % polyester",
            cover: "66% cotton, 34% polyester",
            leg: "Solid eucalyptus wood, Adhesive, Stain, Clear acrylic lacquer",
            back: "Solid eucalyptus wood, Fiberboard, Fiberboard, Polyurethane foam 1.4 lb/cu.ft., Polyester wadding",
            seat: "High resilient polyurethane foam (cold foam)., Solid eucalyptus wood, Polyester wadding, Fiberboard",
          },
        },
      },
      {
        name: "NORRARYD",
        details: {
          type: 'Bar stool with backrest, black, 29 1/8"',
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 140.0,
          onsale: false,
          stock: 30,
          rating: {
            stars: 4,
            reviews: 2,
          },
          description:
            "Inspired by our Scandinavian design heritage using simple materials and expressions. It’s been tested and approved for public use – so you can be sure it will handle the demands of family-life at home.",
          product_details: [
            "The deepened seat and rounded backrest provide comfort and support.",
            "The metal on the footrest protects it from wearing.",
            "The chair’s height and design match NORRÅKER bar table.",
            "This chair has been rigorously tested against our strictest standards for stability, durability and safety, and will endure everyday use for years.",
          ],
          materials: {
            frame: "Solid wood, Adhesive, Stain, Clear acrylic lacquer",
            leg_base: "Plywood, Stain, Clear acrylic lacquer",
            seat: "Birch veneer, Birch veneer, Layer-glued wood veneer, Stain, Clear acrylic lacquer",
            Bbackrest:
              "Birch veneer, Layer-glued wood veneer, Stain, Clear acrylic lacquer",
          },
        },
      },
    ],
  },
  {
    categories: "Arm Chair",
    items: [
      {
        name: "FLINSHULT",
        details: {
          type: "Armchair, Gunnared dark gray",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 499.0,
          onsale: false,
          stock: 11,
          rating: {
            stars: 4.5,
            reviews: 33,
          },
          description:
            "With its durable upholstery, softly sloping armrests and cone-shaped wooden legs, this spacious armchair suits any room in the home. Made for comfortable relaxing after a long day at work.",
          product_details: [
            "This armchair is ideal for sitting and reading because the high back and wide seat make it extra comfortable to curl up in.",
            "10 year Limited warranty. Read about the terms in the warranty brochure.",
          ],
          materials: {
            frame:
              "200 % polypropylene, Polyurethane foam 1.2 lb/cu.ft., Polyurethane foam 1.5 lb/cu.ft., Solid wood, 100% recycled solid cardboard, Particleboard, Fiberboard",
            seat_cushion:
              "High-resilience polyurethane foam (cold foam) 2.2 lb/cu.ft., Polyurethane foam 1.2 lb/cu.ft.",
            back_cushion: "100% polyester - hollow fiber",
            leg: "Solid wood, Stain, Clear acrylic lacquer",
            smolder_resistant_lining: "Polyester wadding",
            fabric_cover: "100 % polyester (100% recycled)",
          },
        },
      },
      {
        name: "EKENASET",
        details: {
          type: "Armchair, Kilanda light beige",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 249.0,
          onsale: false,
          stock: 14,
          rating: {
            stars: 4.5,
            reviews: 40,
          },
          description:
            "EKENÄSET armchair adds a stylish retro vibe to the room that is inspired by 1950s Scandinavian design. The classic look goes anywhere in the home and gives you sturdy and robust seating for many years.",
          product_details: [
            "Clean lines and supportive comfort, regardless if you're reading, socializing with friends or just relaxing for a moment.",
            "Each armchair has a unique expression since the wooden frame is first stained in a dark-brown tone and then covered with clear lacquer that makes the wood’s natural grains visible.",
            "High-resilience foam in the seat and back makes the armchair regain its shape when you stand up. It is complemented with zigzag springs in the seat and supportive fabric in the back for a firm comfort.",
            "You will sit stable and steady for years to come since the frame is made of hardwearing solid wood. You will also enjoy a relaxed sitting position thanks to the angled backrest.",
            "The tall legs in solid wood make it easy to vacuum or reach things hiding under the armchair to avoid clutter.",
            "The elegant, fixed cover has a perfect fit that will last over time. You can choose from different covers and find one that suits you and your home.",
            "10-year guarantee. Read about the terms in the guarantee brochure.",
          ],
          materials: {
            fabric: "100% polyester (min. 90% recycled)",
            total_composition: "100 % polyester",
            back_and_seat_frame: "Solid wood",
            zig_zag_spring: "Steel",
            Armrest_frame_and_front_rail: "Solid beech, Tinted lacquer",
            back_cushion:
              "High-resilience polyurethane foam (cold foam) 2.2 lb/cu.ft., Polyurethane foam 2.0 lb/cu.ft.",
            seat_cushion: "Polyurethane foam 2.0 lb/cu.ft.",
          },
        },
      },
      {
        name: "POANG",
        details: {
          type: "Armchair, birch veneer/Gunnared beige",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 219.0,
          onsale: false,
          stock: 21,
          rating: {
            stars: 4,
            reviews: 1,
          },
          description:
            "POÄNG armchair has stylish curved lines in bentwood, providing nice support for the neck and comfy resilience. It’s been in our range for several decades and is still just as popular. Want to try it too?",
          product_details: [
            "The layer-glued bent wood frame with a high back gives a comfy resilience and nice support for your neck – making the armchair perfect for you to relax in.",
            "The cushion is covered with the dope-dyed fabric Gunnared – a durable fabric with a wool-like feel, a warm look and a mélange effect.",
            "The tufted design of the cushion gives your armchair an elegant character and ensures that it retains its plushness and softness without you needing to fix the cushion.",
            "Thanks to the timeless expression, it’s easy to combine POÄNG with a variety of seating furniture and give your living room a bold look that never goes out of style.",
            "A range of various seat cushions makes it easy to renew the look of your POÄNG and prolong the lifetime of the armchair so you can enjoy it for many years to come.",
            "To sit even more comfortably and relaxed, you can use the armchair together with a POÄNG ottoman.",
            "10-year guarantee. Read about the terms in the guarantee brochure.",
          ],
          materials: {
            supporting_fabric: "100 % polypropylene.",
            frame:
              "Layer-glued wood veneer, Birch veneer, Clear acrylic lacquer.",
            fabric: "100% polyester (min. 90% recycled)",
            comfort_filling:
              "Polyurethane foam., Polyurethane foam 2.2 lb/cu.ft.",
            back_fabric: "100 % polyester (100% recycled)",
          },
        },
      },
      {
        name: "PERSBOL",
        details: {
          type: "Armchair, black/Tibbleby beige/gray",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
            "img7.avif",
            "img8.avif",
            "img9.avif",
          ],
          price: 199.99,
          onsale: true,
          stock: 24,
          rating: {
            stars: 5,
            reviews: 12,
          },
          description:
            "A crafted feel and timeless design. PERSBOL spindle armchair fits wherever you want to create nooks to spend time with family or enjoy some nice me-time. A classic that only gets more beautiful with time.",
          product_details: [
            "This spindle armchair has a timeless design that suits many different home environments and is easy to live with for generations.",
            "The generous and inviting shape has extra comfort thanks to the thick seat cushion with a foam filling.",
            "Place the spindle armchair next to your sofa in the living room, in a secluded nook for nice me-time or anywhere you need a comfy place to sit.",
            "Made from wood that ages beautifully and adds a naturally warm feel to the room. The artisanal look with visible grains gives each armchair a unique expression.",
            "Add an extra cushion or a throw to make PERSBOL spindle armchair even more comfortable and personal.",
            "The seat cushion is simple to keep clean since the cover can be removed and machine washed.",
            "10-year limited warranty. Read about the terms in the limited warranty brochure.",
          ],
          materials: {
            fabric: "100% polyester (min. 90% recycled)",
            seat_cushion: "Polyurethane foam 1.5 lb/cu.ft.",
            bottom_frame: "Solid birch, Plywood, Tinted lacquer",
            seat_frame: "Plywood, Birch veneer, Tinted lacquer",
            backrest_frame:
              "Layer-glued wood veneer, Birch veneer, Tinted lacquer",
          },
        },
      },
      {
        name: "VEDBO",
        details: {
          type: "Armchair, Gunnared dark gray",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
            "img7.avif",
          ],
          price: 319.0,
          onsale: false,
          stock: 13,
          rating: {
            stars: 4.5,
            reviews: 149,
          },
          description:
            "Soft but distinct lines create an elegant profile. Perfect when you want your own space in an open environment, yet still socialize with others. The cover in dark gray adds elegance and style.",
          product_details: [
            "The timeless design of VEDBO makes it easy to place in various room settings and coordinate with other furniture.",
            "10-year limited warranty. Read about the terms in the limited warranty brochure.",
            "VEDBO armchair is ideal when you want to relax in your own space in an open environment, yet still want the opportunity to socialize with others when you like.",
            "VEDBO comes in 3 different earthy colors, adding beauty to any room.",
          ],
          materials: {
            frame:
              "High resilient polyurethane foam (cold foam)., Fiberboard, Steel",
            seat_cushion: "High resilient polyurethane foam (cold foam).",
            leg: "Solid birch, Clear acrylic lacquer",
            fabric: "100% polyester (min. 90% recycled)",
          },
        },
      },
      {
        name: "FINNALA",
        details: {
          type: "Armchair, Gunnared beige",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
          ],
          price: 480.0,
          onsale: false,
          stock: 9,
          rating: {
            stars: 5,
            reviews: 1,
          },
          description:
            "The VIMLE sofa series has sections that can be combined as you like into a customized solution for you and your home – and as your life changes, you can complete the sofa and let it change with you.",
          product_details: [
            "This firm armchair will have a long life since the seat cushion is filled with high resilience foam that gives good support for your body and quickly regains its original shape when you get up.",
            "The sofa's sections can be combined in different ways to get a size and shape that suits you and your home.",
            "You can create your own perfect combination with the planning tool. Assemble, take apart and put together again until it’s just right.",
            "You can complete with VIMLE headrest to extend the backrest of the armchair, so that you sit even more comfortably with a nice support for your neck.",
            "This cover is made of dope-dyed Gunnared fabric in polyester. It is a durable fabric with a wool-like feel, a warm look and a two-toned mélange effect.",
            "The cover is easy to keep clean since it is removable and machine washable.",
            "10-year limited warranty. Read about the terms in the limited warranty brochure.",
          ],
          materials: {
            smolder_resistant_lining: "Polyester wadding",
            frame:
              "Plywood, Polyurethane foam 2.0 lb/cu.ft., Particleboard, Solid wood, Fiberboard",
            leg: "Polypropylene Cover for 1-seat section",
            back_fabric: "100 % polyester (100% recycled)",
            cover_other_surfaces: "100 % polyester",
            fabric: "100% polyester (min. 90% recycled)",
            cover_for_armrest: "100% polyester (min. 90% recycled)",
            cover_frame:
              "Plywood, Polyurethane foam 1.2 lb/cu.ft., Particleboard, Fiberboard, Solid wood",
            cover_back_fabric: "100 % polyester (100% recycled)",
            back_cushion: "30% cut polyurethane foam/ 70% polyester fibers",
            seat_cushion:
              "High-resilience polyurethane foam (cold foam) 2.2 lb/cu.ft.",
            pocket_spring_unit: "Steel",
          },
        },
      },
      {
        name: "TULLSTA",
        details: {
          type: "Armchair, Lofallet beige",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
            "img7.avif",
          ],
          price: 269.0,
          onsale: false,
          stock: 18,
          rating: {
            stars: 4,
            reviews: 36,
          },
          description:
            "A small armchair with big heart that fits perfectly even when space is limited.",
          product_details: [
            "A range of coordinated covers makes it easy for you to give your furniture a new look.",
            "Slim lines, easy to place.",
            "The cover is easy to keep clean since it is removable and can be machine washed.",
            "The included cushion can be used for lumbar support.",
            "10-year limited warranty. Read about the terms in the limited warranty brochure.",
          ],
          materials: {
            frame:
              "Solid wood, Particleboard, 100% recycled solid cardboard, Polyurethane foam 1.5 lb/cu.ft., Polyester wadding, Fiberboard",
            seat_cushion: "Polyurethane foam 2.2 lb/cu.ft., Polyester wadding",
            back_cushion: "Polyurethane foam 1.2 lb/cu.ft., Polyester wadding",
            hook_and_loop_fastener: "100 % nylon",
            leg: "Solid beech, Clear acrylic lacquer",
            smolder_resistant_lining: "Polyester wadding",
            fabric: "55 % cotton, 45% polyester (min. 90% recycled)",
            back_fabric: "100 % polypropylene",
          },
        },
      },
      {
        name: "EKERO",
        details: {
          type: "Armchair, Bomstad black",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 299.0,
          onsale: false,
          stock: 2,
          rating: {
            stars: 5,
            reviews: 11,
          },
          description:
            "Go for stylish dark tones or brighten up your home with colorful covers. EKERÖ armchair has a sleek, modern look with two side pieces that meet in the back – and lumbar support for added comfort!",
          product_details: [
            "The back cushion can be moved around to fit your sitting style.",
            "The fixed Bomstad cover is made of a durable material that both feels and looks like leather. The material consists of polyester and cotton and has a protective coating of polyurethane.",
            "10 year Limited warranty. Read about the terms in the warranty brochure.",
          ],
          materials: {
            supporting_fabric: "100 % polypropylene",
            coated_fabric_parts:
              "100 % polyurethane, 75 % polyester, 25 % cotton",
            frame:
              "Particleboard, Plywood, Polyurethane foam 1.5 lb/cu.ft., Laminated veneer lumber, Solid wood, Fiberboard",
            fixed_seat: "Polyurethane foam 2.0 lb/cu.ft.",
            loose_cushion: "Polyester fiber balls",
            leg: "Steel, Powder coating",
          },
        },
      },
      {
        name: "MORABO",
        details: {
          type: "Armchair, Grann/Bomstad dark beige/wood",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
            "img7.avif",
            "img8.avif",
          ],
          price: 799.0,
          onsale: false,
          stock: 3,
          rating: {
            stars: 4.5,
            reviews: 21,
          },
          description:
            "Warm and welcoming, neat and stylish. The supporting seat cushions, the cover’s soft finish and the tight fit gives this armchair a perfect balance between its comfort, functions and look.",
          product_details: [
            "The contact surfaces are covered with GRANN – a soft, smooth and strong grain leather with natural variations. Other surfaces have BOMSTAD, a coated fabric that has a similar look and feel to leather.",
            "Seat cushions filled with high-resilience foam and polyester fiber wadding provide great seating comfort.",
            "10-year limited warranty. Read about the terms in the limited warranty brochure.",
          ],
          materials: {
            back_and_seat_frame:
              "Plywood, Solid pine, Particleboard, Fiberboard",
            armrest_frame:
              "Plywood, Solid pine, Polyurethane foam 1.5 lb/cu.ft., Particleboard, Fiberboard",
            back_cushion: "Polyurethane foam 1.5 lb/cu.ft.",
            seat_cushion:
              "High-resilience polyurethane foam (cold foam) 2.2 lb/cu.ft.",
            smolder_resistant_lining: "Polyester wadding",
            coated_fabric_parts:
              "100 % polyurethane, 75 % polyester, 25 % cotton",
            main_parts:
              "Dyed through top-grain leather with a treated, embossed and pigmented surface",
          },
        },
      },
      {
        name: "BUSKBO",
        details: {
          type: "Armchair, rattan/Djupvik white",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 279.0,
          onsale: false,
          stock: 16,
          rating: {
            stars: 4.5,
            reviews: 14,
          },
          description:
            "Made of hand-woven rattan, a living material that makes each armchair unique. Airy but sturdy with an embracing feel makes it perfect to curl up in. A great way to invite nature into your home.",
          product_details: [
            "Handmade by experienced craftspeople, which makes each armchair unique.",
            "Rattan is a natural material which ages beautifully and develops its own unique character over time.",
            "The armchair is lightweight and easy to move if you want to clean the floor or rearrange the furniture.",
            "Plastic feet protect your floor against scratching.",
            "The cushion can be turned over and therefore has two sides for even wear.",
            "The cushion cover is easy to keep clean since it’s removable and can be machine washed.",
          ],
          materials: {
            Armchair: "Rattan, Clear acrylic lacquer",
            cushion_comfort_filling:
              "70% cut polyurethane foam/ 30% polyester fibers",
            smolder_resistant_lining: "Polyester wadding",
            cord: "100 % polyester",
            fabric: "100 % cotton",
          },
        },
      },
      {
        name: "ULRIKSBERG",
        details: {
          type: "Armchair, rattan/anthracite",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
            "img7.avif",
          ],
          price: 159.99,
          onsale: true,
          stock: 31,
          rating: {
            stars: 4,
            reviews: 39,
          },
          description:
            "Made of hand-woven rattan, a living material that makes each armchair unique. It's airy, comfortable to sit in and easy to move around thanks to its low weight. A great way to invite nature into your home.",
          product_details: [
            "Hand-woven backrest and seat by experienced craftspeople, which makes each armchair unique.",
            "The armchair is lightweight and easy to move if you want to clean the floor or rearrange the furniture.",
            "Rattan is a natural material which ages beautifully and develops its own unique character over time.",
            "Easy to bring home since it’s lightweight and flat-packed.",
          ],
          materials: {
            weaving: "Rattan, Clear acrylic lacquer",
            seat_back_leg_frame: "Steel, Epoxy/polyester powder coating",
          },
        },
      },
    ],
  },
  {
    categories: "Wing Chair",
    items: [
      {
        name: "STRANDMOM",
        details: {
          type: "Wing chair, Nordvalla dark gray",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
            "img7.avif",
            "img8.avif",
            "img9.avif",
          ],
          price: 299.0,
          onsale: false,
          stock: 7,
          rating: {
            stars: 4.5,
            reviews: 1186,
          },
          description:
            "Bringing new life to an old favorite. We first introduced this chair in the 1950’s. Some 60 years later we brought it back into the range with the same craftsmanship, comfort and appearance. Enjoy!",
          product_details: [
            "You can really loosen up and relax in comfort because the high back on this chair provides extra support for your neck.",
            "10-year limited warranty. Read about the terms in the limited warranty brochure.",
          ],
          materials: {
            fabric: "100 %polyester",
            frame:
              "Plywood, Polyurethane foam 1.2 lb/cu.ft., Polyurethane foam 1.5 lb/cu.ft., Polyurethane foam 2.2 lb/cu.ft., Particleboard, Solid wood",
            seat_cushion: "Polyurethane foam 2.2 lb/cu.ft.",
            leg: "solid wood, Stain",
          },
        },
      },
      {
        name: "OSKARSHAMN",
        details: {
          type: "Wing chair, Tibbleby beige/gray",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
          ],
          price: 399.0,
          onsale: false,
          stock: 4,
          rating: {
            stars: 5,
            reviews: 21,
          },
          description:
            "Who doesn't dream of having their own nook to relax in? The comfy OSKARSHAMN wing chair feels wonderfully embracing while the timeless design makes it the given eye-catcher in any room.",
          product_details: [
            "This classic and timeless wing chair with an embracing backrest gives you relaxing me-time and is also great to sit on while enjoying socializing with others.",
            "Clean lines, simple and at the same time a softly rounded design with wooden legs all make the wing chair easy to like and place anywhere.",
            "The wing chair has a high comfort level thanks to the seat with a combination of supportive springs and soft foam, lumbar support, armrests and an extra-high backrest that you can lean against.",
            "You can complete your wing chair with OSKARSHAMN footstool to sit even more comfortably.",
            "10-year limited warranty. Read about the terms in the limited warranty brochure.",
          ],
          materials: {
            fabric: "100% polyester (min. 90% recycled)",
            frame:
              "Paperboard (min. 100% recycled), Particleboard, Laminated veneer lumber, Polyurethane foam 1.5 lb/cu.ft., Fiberboard, Solid wood, Plywood, High-resilience polyurethane foam (cold foam) 2.2 lb/cu.ft.",
            zig_zag_spring: "Steel",
            leg: "Solid beech, Tinted lacquer",
            pin: "Steel, Galvanized",
            sleeve: "Polyamide",
          },
        },
      },
      {
        name: "RISHOLMEN",
        details: {
          type: "Wing chair, in/outdoor, brown",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 299.99,
          onsale: true,
          stock: 0,
          rating: {
            stars: 4.5,
            reviews: 24,
          },
          description:
            "If you need a moment for yourself, this wing chair in maintenance-free plastic rattan is a perfect outdoor retreat. The high back embraces you and provides comfortable support to the whole body.",
          product_details: [
            "Handwoven plastic rattan looks like natural rattan but is more durable for outdoor use.",
            "Here you can relax and enjoy since the wing chair’s high back embraces you and creates a cocoon-like feeling while giving your head and neck comfortable support.",
            "Durable, weather-resistant and maintenance-free since the furniture is made of plastic rattan and rustproof aluminum.",
            "Handmade by skilled craftspeople, which makes every product unique.",
          ],
          materials: {
            seat_frame:
              "Steel, Steel, Steel, Polyethylene, Polyethylene, Polypropylene, Polyester powder coating",
            back_frame:
              "Steel, Polyethylene, Polyethylene, Polypropylene, Polyester powder coating",
            armrest_frame:
              "Steel, Steel, Polyethylene, Polyethylene, Polypropylene, Polyester powder coating",
          },
        },
      },
      {
        name: "VINGSON",
        details: {
          type: "Wing chair, in/outdoor, gray",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
            "img7.avif",
            "img8.avif",
            "img9.avif",
          ],
          price: 399.0,
          onsale: false,
          stock: 5,
          rating: {
            stars: 5,
            reviews: 1,
          },
          description:
            "Like a beautiful peacock, this throne-like armchair catches the eye. With its wonderful comfort and generous shape, it is made for relaxing on the terrace or in the garden.",
          product_details: [
            "The decorative textile rope weave and the fabric covered cushions, together with the slender wooden legs, give the armchair an expression that goes just as well outdoors as indoors.",
            "The flexible textile rope weave combined with the comfortable cushions makes the armchair soft and cozy to sit on.",
            "Here you can relax and enjoy since the wing chair’s high back embraces you and creates a cocoon-like feeling while giving your head and neck comfortable support.",
            "For added durability, and so you can enjoy the natural expression of the wood, the furniture has been pre-treated with a layer of semi-transparent wood stain.",
          ],
          materials: {
            seat_frame: "Solid acacia wood, Acrylic stain",
            back_frame: "Steel, Steel, Polyester powder coating",
            side_frame: "Steel, Steel, Steel, Polyester powder coating",
            rope: "Polypropylene",
          },
        },
      },
    ],
  },
  {
    categories: "Rocking Chair",
    items: [
      {
        name: "POANG",
        details: {
          type: "Rocking chair, brown/Gunnared beige",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 269.0,
          onsale: false,
          stock: 16,
          rating: {
            stars: 5,
            reviews: 2,
          },
          description:
            "POÄNG rocking chair has stylish curved lines in bentwood, providing nice support for the neck. The rocking feature adds an extra dimension to the comfort, allowing you to fully relax. Enjoy rocking!",
          product_details: [
            "POÄNG rocking-chair provides a smooth, pleasantly rocking motion that can have a calming effect and help you to unwind.",
            "The layer-glued bent wood frame with a high back gives a comfy resilience and nice support for your neck – making the rocking-chair perfect for you to relax in.",
            "The cushion is covered with the dope-dyed fabric Gunnared – a durable fabric with a wool-like feel, a warm look and a mélange effect.",
            "The tufted design of the cushion gives your rocking-chair an elegant character and ensures that it retains its plushness and softness without you needing to fix the cushion.",
            "Thanks to the timeless expression, it’s easy to combine POÄNG with a variety of seating furniture and give your living room a bold look that never goes out of style.",
            "A range of various seat cushions makes it easy to change the look of your POÄNG and prolong the lifetime of the rocking-chair so you can enjoy it for many years to come.",
            "10-year guarantee. Read about the terms in the guarantee brochure.",
          ],
          materials: {
            supporting_fabric: "100 % polypropylene",
            frame:
              "Layer-glued wood veneer, Birch veneer, Clear acrylic lacquer",
            fabric: "100% polyester (min. 90% recycled)",
            comfort_filling:
              "Polyurethane foam., Polyurethane foam 2.2 lb/cu.ft.",
            back_fabric: "100 % polyester (100% recycled)",
          },
        },
      },
      {
        name: "BONDHOLMEN",
        details: {
          type: "Rocking chair, outdoor, gray",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
            "img7.avif",
          ],
          price: 249.0,
          onsale: false,
          stock: 11,
          rating: {
            stars: 4.5,
            reviews: 7,
          },
          description:
            "For you who wants a comfortable and robust chair in a traditional style. It is made of high-quality, durable eucalyptus with a generous seat and handicraft details. For many enjoyable moments outdoors.",
          product_details: [
            "Rocking slowly back and forth helps you relax – and what can be more relaxing than sitting outdoors in a rocking chair on a cozy summer evening and watching the sun slowly set over the horizon?",
            "To make the rocking chair as comfortable as possible for you, we designed it with generous proportions for both the seat and the armrests so they provide good support.",
            "The seat has a small edge at the back to keep the cushion in place.",
            "Plastic strips underneath the rockers protect the furniture when in contact with a moist surface.",
            "Made of high-quality, sustainably sourced eucalyptus.",
            "Eucalyptus is a durable, hard wood type suitable for outdoor use since it is compact and has a naturally high oil content that helps protect against weather and wind, drying out and mold.",
            "The gray-colored surface in three layers makes the rocking chair even more durable for outdoor use and also makes it blend into the outdoor surroundings.",
          ],
          materials: {
            total_composition: "Solid eucalyptus wood, Acrylic stain",
          },
        },
      },
      {
        name: "TUMHOLMEN",
        details: {
          type: "Rocking chair, in/outdoor, white/multicolor",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
          ],
          price: 89.99,
          onsale: true,
          stock: 22,
          rating: {
            stars: 3.5,
            reviews: 5,
          },
          description:
            "A rocker for relaxing. The simple design with a colorful, waterproof and easy-care textile seat, attracts the eye, adding a cozy vibe to your outdoor space – but is just and comfy and cool indoors too.",
          product_details: [
            "Rocking slowly back and forth helps you relax – and what can be more relaxing than sitting outdoors in a rocking chair on a cozy summer evening and watching the sun slowly set over the horizon?",
            "The high back provides good support for your neck.",
            "Made of heavy polyester fabric, which is very durable.",
            "The materials in this outdoor furniture require no maintenance.",
            "Suitable for both indoor and outdoor use.",
            "The cover is easy to keep clean because it is removable and machine washable.",
          ],
          materials: {
            seat_frame: "Steel, Polyester powder coating",
            back_seat: "100% polyester (min. 90% recycled)",
          },
        },
      },
    ],
  },
  {
    categories: "Gaming Chair",
    items: [
      {
        name: "MATCHSPEL",
        details: {
          type: "Gaming chair, Bomstad light gray",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
            "img7.avif",
            "img8.avif",
          ],
          price: 289.99,
          onsale: true,
          stock: 6,
          rating: {
            stars: 3.5,
            reviews: 12,
          },
          description:
            "MATCHSPEL gaming chair helps you play at the top of your game. Your whole body enjoys nice support and you can adjust the height of the chair, neck and armrests to sit really comfy when the game begins.",
          product_details: [
            "3-year warranty. Read about the terms in the warranty brochure.",
            "The synchronized seat and back tilt follows your body movements and adjusts the chair to the correct position.",
            "The adjustable and lockable tilt function increases stability and control in different sitting positions.",
            "The design of the high backrest gives your body, neck and head a sturdy and comfortable support.",
            "Your back gets support and extra relief from the built-in lumbar support.",
            "The mesh material of the backrest lets air through, which is extra nice when a match drags on.",
            "You can easily turn and adjust the height of the headrest to give your neck a nice support when playing – and when you want to relax between matches.",
            "The armrests follow your movements and can be adjusted in height, which reduces strain on your arms and shoulders.",
            "You sit comfortably since the chair is adjustable in height.",
            "The seat’s leather-like upholstery is durable and easy to wipe clean.",
            "High-quality density foam will keep the chair comfortable for many years to come.",
            "The gaming chair's stable carbon steel frame and plywood last for many and long matches.",
            "The safety casters have a pressure-sensitive brake mechanism that keeps the chair in place when you stand up, and releases automatically when you sit down.",
            "The casters are rubber coated to run smoothly on any type of floor.",
          ],
          materials: {
            coated_fabric_parts:
              "100 % polyurethane, 75 % polyester, 25 % cotton",
            back_frame_bar: "Steel, Epoxy/polyester powder coating",
            seat_frame: "Layer-glued wood veneer",
            seat_foam: "Polyurethane foam.",
            headrest: "Reinforced polypropylene",
            mesh: "100 %polyester",
            star_base: "Aluminum, Epoxy/polyester powder coating",
            seat_cover: "52 % polyester, 30 % polyurethane, 18 % cotton",
            fabric: "100% polyester (min. 90% recycled)",
            coated_fabric: "100 % polyurethane, 75 % polyester, 25 % cotton",
          },
        },
      },
      {
        name: "GRUPPSPEL",
        details: {
          type: "Gaming chair, Gunnared beige",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
            "img7.avif",
            "img8.avif",
          ],
          price: 389.99,
          onsale: true,
          stock: 12,
          rating: {
            stars: 3.5,
            reviews: 37,
          },
          description:
            "Cool gaming chair that blends in nicely with other decor. Equipped with many smart functions that allow you to adjust the back, seat, recline angle, tilt, armrests and headrest to sit really comfy.",
          product_details: [
            "3-year warranty. Read about the terms in the warranty brochure.",
            "The chair gives your back a comfortable support that helps you sit ergonomically correct since the backrest can be adjusted in 5 different heights and has a built-in lumbar support.",
            "The adjustable and lockable tilt function increases stability and control in different sitting positions.",
            "High-quality density foam will keep the chair comfortable for many years to come.",
            "You can adjust the height of the headrest and move it both forwards and backwards to enjoy support precisely where your head needs it during matches and breaks.",
            "When you need a moment to relax, you can lean your head against either side of the headrest.",
            "The height and horizontal angle of the armrests can be adjusted. They also follow your arm movements during the game by moving back and forth, which relieves strain on arms and shoulders.",
            "You sit comfortably since the chair is adjustable in height.",
            "The safety casters have a pressure-sensitive brake mechanism that keeps the chair in place when you stand up, and releases automatically when you sit down.",
            "The casters are rubber coated to run smoothly on any type of floor.",
          ],
          materials: {
            fabric: "100% polyester (min. 90% recycled)",
            headrest: "Reinforced polyamide, Zinc, Polypropylene",
            back_frame: "Steel, Polypropylene, Reinforced polyamide, Zinc",
            back_bar: "Steel, Epoxy/polyester powder coating",
            armrest_pad: "Polypropylene",
            armrest_frame: "Reinforced polyamide, Polypropylene",
            seat_frame: "Polypropylene, Steel",
            foam: "High resilient polyurethane foam (cold foam)., Polyurethane foam.",
            star_base: "Aluminum, Epoxy/polyester powder coating",
            coated_fabric: "100 % polyurethane, 75 % polyester, 25 % cotton",
          },
        },
      },
      {
        name: "STYRSPEL",
        details: {
          type: "Gaming chair, dark gray/gray",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
            "img7.avif",
            "img8.avif",
          ],
          price: 369.99,
          onsale: true,
          stock: 10,
          rating: {
            stars: 3.5,
            reviews: 53,
          },
          description:
            "STYRSPEL gaming chair helps you play at the top of your game. Adjust the headrest, lumbar support, armrests and the seat height and depth – the mesh material keeps you cool when the game heats up!",
          product_details: [
            "The mesh material of the backrest lets air through, which is extra nice when a match drags on.",
            "3-year warranty. Read about the terms in the warranty brochure.",
            "This chair gives your arms a comfortable support and reduces tension in your neck and shoulders since the padded armrests can be adjusted upwards/downwards, forwards/backwards and inwards.",
            "The armrests are attached to the backrest, so they recline together with the backrest to provide support for various activities like when you’re playing on your phone.",
            "You sit comfortably since the chair is adjustable in height.",
            "The synchronized seat and back tilt follows your body movements and adjusts the chair to the correct position.",
            "The design of the high backrest gives your body, neck and head a sturdy and comfortable support.",
            "You can adjust the height of the headrest to give your neck a nice support when playing – and when you want to relax between matches.",
            "Your back gets the support it needs because the seat depth can be adjusted.",
            "You can adjust the lumbar support to suit you and your needs.",
            "The safety casters have a pressure-sensitive brake mechanism that keeps the chair in place when you stand up, and releases automatically when you sit down.",
            "The base contributes to both movement and stability – and works as a footrest too.",
          ],
          materials: {
            back_fabric: "56 % nylon, 44% elastic polyester",
            base_fabric: "55% elastic polyester, 45 % nylon",
            seat_frame: "Steel, Epoxy/polyester powder coating",
            backrest_frame: "Steel, Epoxy/polyester powder coating",
            support_rail: "Steel, Epoxy/polyester powder coating",
            gas_cylinder: "Steel, Epoxy/polyester powder coating",
            cover_plate: "Polypropylene, Polypropylene",
            lumbar_support: "Polypropylene",
            top_frame: "Polyamide",
            slide_rail: "Steel",
            lamella_seat_lock: "Steel",
            armrest_frame: "Aluminum, Epoxy/polyester powder coating",
            star_base: "Aluminum, Epoxy/polyester powder coating",
            cover: "Reinforced polyamide",
            comfort_filling: "100% polyester",
            base: "Polypropylene, Synthetic rubber",
          },
        },
      },
      {
        name: "UTESPELARE",
        details: {
          type: "Gaming chair, Bomstad black",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
            "img7.avif",
            "img8.avif",
          ],
          price: 199.99,
          onsale: true,
          stock: 38,
          rating: {
            stars: 4,
            reviews: 74,
          },
          description:
            "UTESPELARE gaming chair gives your body a nice support with a synchronized seat and back tilt that precisely follows your movements during the entire match. And after playing, you can sit back to recharge.",
          product_details: [
            "3-year warranty. Read about the terms in the warranty brochure.",
            "The synchronized seat and back tilt follows your body movements and adjusts the chair to the correct position.",
            "The design of the high backrest gives your body, neck and head a sturdy and comfortable support.",
            "You sit comfortably since the chair is adjustable in height.",
            "This desk chair has adjustable tilt tension that allows you to adjust the resistance to suit your movements and weight.",
            "You easily adjust the height of the chair and the tilt of the back with one hand.",
            "On the back of the backrest there is a pocket where you can put things you want close at hand when playing.",
            "The leather-like upholstery is durable and easy to wipe clean.",
            "The safety casters have a pressure-sensitive brake mechanism that keeps the chair in place when you stand up, and releases automatically when you sit down.",
            "Goes well with the matching UTESPELARE gaming desk.",
          ],
          materials: {
            coated_fabric: "100 % polyurethane, 75 % polyester, 25 % cotton",
            back_frame: "Steel, Epoxy powder coating",
            seat_foam: "Polyurethane foam.",
            back_foam: "Polyurethane foam.",
            armrest_frame: "Steel",
            armres_pad: "Polypropylene",
            seat_frame: "Layer-glued wood veneer",
            fabric_cover: "52 % polyester, 30 % polyurethane, 18 % cotton",
            back_fabric: "100 % polyester",
            coated_fabric_parts:
              "100 % polyurethane, 75 % polyester, 25 % cotton",
            fabric: "100% polyester (min. 90% recycled)",
          },
        },
      },
      {
        name: "HUVUDSPELARE",
        details: {
          type: "Type: Gaming chair, black",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
          ],
          price: 89.99,
          onsale: true,
          stock: 104,
          rating: {
            stars: 4,
            reviews: 71,
          },
          description:
            "Adjust the height and angle to sit really comfortably, and let the game begin. The backrest gives you good lumbar support – and even when the game heats up, you stay cool thanks to the mesh net.",
          product_details: [
            "3-year warranty. Read about the terms in the warranty brochure.",
            "Your back gets support and extra relief from the built-in lumbar support.",
            "This desk chair has adjustable tilt tension that allows you to adjust the resistance to suit your movements and weight.",
            "The synchronized seat and back tilt follows your body movements and adjusts the chair to the correct position.",
            "You sit comfortably since the chair is adjustable in height.",
            "The mesh material of the backrest lets air through to your back during long sitting periods.",
            "The safety casters have a pressure-sensitive brake mechanism that keeps the chair in place when you stand up, and releases automatically when you sit down.",
          ],
          materials: {
            armrest_frame: "Steel, Epoxy/polyester powder coating",
            star_base_center_and_leg: "Steel, Epoxy/polyester powder coating",
            back_frame: "Steel, Epoxy/polyester powder coating",
            wooden_part: "Layer-glued wood veneer",
            armrest_pad: "Polypropylene",
            cover: "100 % polyester",
            elastics: "Synthetic rubber",
            foam: "Polyurethane foam.",
            end_cap: "Reinforced polyamide, Reinforced polyamide",
            back_fabric: "Non-woven polyester fabric",
          },
        },
      },
    ],
  },
  {
    categories: "Office Chair",
    items: [
      {
        name: "MARKUS",
        details: {
          type: "Office chair, Vissle dark gray",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
            "img7.avif",
            "img8.avif",
            "img9.avif",
          ],
          price: 289.99,
          onsale: true,
          stock: 0,
          rating: {
            stars: 4.5,
            reviews: 440,
          },
          description:
            "This ergonomic office chair keeps you comfy and focused with features like a manually adjustable tilt tension, and head-/armrests to help relax the muscles in your neck and back. 10 year guarantee.",
          product_details: [
            "10-year Warranty. Read about the terms in the warranty brochure.",
            "Suitable for business use.",
            "This ergonomic office chair has lots of functions that allow you to easily adapt the chair to your body.",
            "Height-adjustable seat allows you to adjust the height so that back and legs are at a 90° angle.",
            "Synchronized tilt mechanism allows the chair to move with you. The backrest moves more than the seat when you lean back, so torso/hips open up. This improves circulation and keeps energy levels up.",
            "As you recline, the synchronized tilt mechanism allows feet to stay on the floor while your gaze remains straight ahead. Your chest stretches without adding pressure on thighs, improving circulation.",
            "This swivel chair has adjustable tilt tension that allows you to adjust the resistance to suit your movements and weight.",
            "To adjust the tilt tension, turn the knob under the seat to increase or decrease the resistance.",
            "The high backrest and the curved shape of the chair, provide good lower back support and prevent your back from getting tired. You sit comfortably and longer with a relaxed posture.",
            "The shape of the armrests provides good support and helps you find a good sitting position.",
            "The mesh material of the backrest lets air through to your back during long sitting periods.",
            "A safety function locks the castors when no one is sitting in the chair and keeps it securely in place when you stand up.",
            "The castors are designed to provide ease of movement and maneuverability on both carpeted and hard floors as well as on uneven surfaces.",
          ],
          materials: {
            back_frame: "Steel, Epoxy/polyester powder coating",
            armrest_frame: "Steel, Epoxy/polyester powder coating",
            back_bar: "Steel, Epoxy/polyester powder coating",
            armrest_pad: "Polypropylene",
            foam: "Polyurethane foam.",
            seat_frame: "Layer-glued wood veneer",
            star_base: "Aluminum, Epoxy/polyester powder coating",
            total_composition: "100 % polyester",
          },
        },
      },
      {
        name: "FLINTAN",
        details: {
          type: "Office chair with armrests, black",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
          ],
          price: 129.99,
          onsale: true,
          stock: 19,
          rating: {
            stars: 4,
            reviews: 85,
          },
          description:
            "This ergonomic office chair keeps you comfy and focused with a high backrest that provides good support, made with airy mesh so you stay cool. The seat cover is removable and washable. 10 year guarantee.",
          product_details: [
            "10-year Warranty. Read about the terms in the warranty brochure.",
            "Suitable for business use.",
            "The cover is easy to keep clean as it is removable and machine washable.",
            "This ergonomic office chair has lots of functions that allow you to easily adapt the chair to your body.",
            "Height-adjustable seat allows you to adjust the height so that back and legs are at a 90° angle.",
            "With automatic tilt tension, your body weight determines how much resistance the backrest offers. This counter-pressure helps you keep an active posture in your chair.",
            "Increased stability since the tilt function is lockable when the backrest is in the upright position.",
            "Synchronized tilt mechanism allows the chair to move with you. The backrest moves more than the seat when you lean back, so torso/hips open up. This improves circulation and keeps energy levels up.",
            "As you recline, the synchronized tilt mechanism allows feet to stay on the floor while your gaze remains straight ahead. Your chest stretches without adding pressure on thighs, improving circulation.",
            "The high backrest and the curved shape of the chair, provide good lower back support and prevent your back from getting tired. You sit comfortably and longer with a relaxed posture.",
            "Armrests provide support for the upper part of your forearms and reduce strain on the back and shoulders during long meetings.",
            "A safety function locks the castors when no one is sitting in the chair and keeps it securely in place when you stand up.",
            "The castors are designed to provide ease of movement and maneuverability on both carpeted and hard floors as well as on uneven surfaces.",
            "The casters are rubber coated to run smoothly on any type of floor.",
          ],
          materials: {
            mesh: "100 % polyester (100% recycled)",
            back_frame: "Steel, Epoxy/polyester powder coating",
            gas_cylinder: "Steel, Epoxy/polyester powder coating",
            leg: "Steel, Epoxy/polyester powder coating",
            seat: "Polyurethane foam.",
            seat_frame: "Layer-glued wood veneer",
            end_cap: "Reinforced polyamide",
            castor: "Polypropylene",
            fabric: "100% polyester (min. 90% recycled)",
            cover: "ABS plastic",
            armrest_frame: "Steel, Epoxy/polyester powder coating",
          },
        },
      },
      {
        name: "ALEFJALL",
        details: {
          type: "Office chair, Grann golden brown",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
            "img7.avif",
            "img8.avif",
            "img9.avif",
            "img10.avif",
            "img11.avif",
          ],
          price: 399.99,
          onsale: true,
          stock: 11,
          rating: {
            stars: 4.5,
            reviews: 224,
          },
          description:
            "This ergonomic office chair has many features to keep you comfy and focused, such as a well-shaped backrest with adjustable lumbar support and soft full grain leather that breathes. 10 year guarantee.",
          product_details: [
            "10-year Warranty. Read about the terms in the warranty brochure.",
            "Suitable for business use.",
            "This ergonomic office chair has lots of functions that allow you to easily adapt the chair to your body.",
            "Height-adjustable seat allows you to adjust the height so that back and legs are at a 90° angle.",
            "With automatic tilt tension, your body weight determines how much resistance the backrest offers. This counter-pressure helps you keep an active posture in your chair.",
            "Synchronized tilt mechanism allows the chair to move with you. The backrest moves more than the seat when you lean back, so torso/hips open up. This improves circulation and keeps energy levels up.",
            "As you recline, the synchronized tilt mechanism allows feet to stay on the floor while your gaze remains straight ahead. Your chest stretches without adding pressure on thighs, improving circulation.",
            "Adjustable seat depth enables proper back support and even weight distribution across the seat cushion. This prevents circulation from being cut off at the knees and reduces knee pressure.",
            "Backrest can be adjusted to provide support in all the right places and helping your body to maintain a naturally good posture.",
            "Adjustable lumbar support helps maintain the correct posture while sitting which reduces strain on muscles on your lower back.",
            "The padded armrests provide good support and comfort for your arms.",
            "GRANN cover is made of grain leather which is a very high-quality leather. As it ages it becomes softer and develops a darker tone and fine patina.",
            "A safety function locks the castors when no one is sitting in the chair and keeps it securely in place when you stand up.",
            "The castors are designed to provide ease of movement and maneuverability on both carpeted and hard floors as well as on uneven surfaces.",
          ],
          materials: {
            Back_frame: "Steel, Epoxy/polyester powder coating",
            star_base_center: "Steel, Epoxy/polyester powder coating",
            star_base_leg: "Steel, Epoxy/polyester powder coating",
            adjustment_lever: "Steel, Epoxy/polyester powder coating",
            armrest_pad: "Polyurethane foam., Polypropylene",
            back_foam: "Polyurethane foam.",
            seat_frame: "Layer-glued wood veneer",
            seat_foam: "Polyurethane memory foam., Polyurethane foam.",
            zipper: "100 % polyester",
            cover: "Top-grain leather",
            cover_plate: "Polypropylene",
            spring: "Steel",
            main_parts:
              "Dyed through top-grain leather with a treated, embossed and pigmented surface",
          },
        },
      },
      {
        name: "HATTEFJALL",
        details: {
          type: "Office chair with armrests, Gunnared beige/white",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
            "img7.avif",
            "img8.avif",
            "img9.avif",
            "img10.avif",
          ],
          price: 369.99,
          onsale: true,
          stock: 2,
          rating: {
            stars: 3.5,
            reviews: 7,
          },
          description:
            "This ergonomic office chair has many features to keep you comfy and focused, such as a synchronized tilt mechanism that allows your body to move more, which improves blood circulation. 10 year guarantee.",
          product_details: [
            "10-year Warranty. Read about the terms in the warranty brochure.",
            "Suitable for business use.",
            "This ergonomic office chair has lots of functions that allow you to easily adapt the chair to your body.",
            "Height-adjustable seat allows you to adjust the height so that back and legs are at a 90° angle.",
            "With automatic tilt tension, your body weight determines how much resistance the backrest offers. This counter-pressure helps you keep an active posture in your chair.",
            "Synchronized tilt mechanism allows the chair to move with you. The backrest moves more than the seat when you lean back, so torso/hips open up. This improves circulation and keeps energy levels up.",
            "As you recline, the synchronized tilt mechanism allows feet to stay on the floor while your gaze remains straight ahead. Your chest stretches without adding pressure on thighs, improving circulation.",
            "Adjustable seat depth enables proper back support and even weight distribution across the seat cushion. This prevents circulation from being cut off at the knees and reduces knee pressure.",
            "Backrest can be adjusted to 5 different heights to provide support in all the right places and helping your body to maintain a naturally good posture.",
            "Adjustable lumbar support helps maintain the correct posture while sitting which reduces strain on muscles on your lower back.",
            "Height and width adjustable armrests enable a relaxed position for arms and shoulders and reduce the risk of tension, fatigue and pain in the shoulders and neck.",
            "Tilt lock allows you to adjust the tilt and lock it at 3 different positions, from low to upright.",
            "A safety function locks the castors when no one is sitting in the chair and keeps it securely in place when you stand up.",
            "The castors are designed to provide ease of movement and maneuverability on both carpeted and hard floors as well as on uneven surfaces.",
          ],
          materials: {
            armrest_fixture: "Reinforced polyamide",
            inner_frame: "Reinforced polyamide",
            armrest_frame: "Reinforced polyamide",
            button: "Reinforced polyamide",
            armrest_pad: "Synthetic rubber",
            back_frame: "Layer-glued wood veneer",
            seat_frame: "Steel",
            back_bar: "Steel, Acrylic paint",
            mechanism:
              "Steel, Acetal plastic, Reinforced polyamide, Epoxy/polyester powder coating",
            star_base: "Aluminum, Epoxy/polyester powder coating",
            back_foam: "High resilient polyurethane foam (cold foam).",
            seat_foam: "High resilient polyurethane foam (cold foam).",
            seat_cushion: "High resilient polyurethane foam (cold foam).",
            hook_and_loop_fastener: "100 % nylon",
            zipper: "100 % polyester",
            thread: "100 % polyester",
            fabric: "100% polyester (min. 90% recycled)",
          },
        },
      },
      {
        name: "VALLFJALLET",
        details: {
          type: "Office chair, Gunnared gray",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
            "img7.avif",
          ],
          price: 389.99,
          onsale: true,
          stock: 1,
          rating: {
            stars: 4,
            reviews: 1,
          },
          description:
            "Minimalist style combined with maximum functionality. The ergonomic VALLFJÄLLET office chair is easy to adjust so it gives your body comfortable support – regardless if you are in the office or at home.",
          product_details: [
            "If you want to reduce the strain on your head and arms, you can complete with a headrest and armrests, sold separately.",
            "Seat and backrest are adjustable in height and give you maximum support regardless of your height.",
            "You can lean back with perfect balance, as the tilt tension mechanism automatically adjusts the resistance to suit your weight and movements.",
            "Easy to move where it is needed thanks to casters.",
            "The adjustable and lockable tilt function increases stability and control in different sitting positions.",
            "Your back gets support and extra relief from the built-in lumbar support.",
            "High-quality density foam will keep the chair comfortable for many years to come.",
            "10-year Warranty. Read about the terms in the warranty brochure.",
          ],
          materials: {
            fabric: "100% polyester (min. 90% recycled)",
            Layer_glued_seat: "Eucalyptus veneer",
            backrest: "Eucalyptus veneer",
            seat_foam: "High resilient polyurethane foam (cold foam).",
            back_foam:
              "100% polyester (min. 70% recycled), High resilient polyurethane foam (cold foam).",
            back_bar: "Steel, Epoxy powder coating",
            mechanism:
              "Acetal plastic, Reinforced polyamide, Epoxy powder coating",
            seat_lining: "Non-woven polypropylene",
            star_base: "Reinforced polyamide",
            thread: "100 % polyester",
            zipper: "100 % polyester",
          },
        },
      },
    ],
  },
  {
    categories: "Swivel Chair",
    items: [
      {
        name: "ELDBERGET",
        details: {
          type: "Swivel chair, beige/white",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
          ],
          price: 69.99,
          onsale: true,
          stock: 121,
          rating: {
            stars: 4.5,
            reviews: 172,
          },
          description:
            "Lower back support, adjustable height and sturdy castors – this desk chair really has it all. Use it at the desk, roll it to the dining table.",
          product_details: [
            "The beautiful and light shape of this desk chair makes it easy to furnish any workspace at home for schoolwork, hobbies or just paying the bills.",
            "The high backrest and the curved shape of the chair, provide good lower back support and prevent your back from getting tired. You sit comfortably and longer with a relaxed posture.",
            "You sit comfortably since the chair is adjustable in height.",
            "The safety casters have a pressure-sensitive brake mechanism that keeps the chair in place when you stand up, and releases automatically when you sit down.",
            "Give extra softness and comfort to ELDBERGET desk chair by adding the matching PYNTEN seat pad.",
            "Easy to keep clean by just wiping with a damp cloth.",
          ],
          materials: {
            Seat_shell: "Polypropylene",
            chair_frame: "Swivel",
            lamella_seat_lock: "Steel, Epoxy/polyester powder coating",
            gas_cylinder: "Steel, Epoxy/polyester powder coating",
            star_base_center: "Steel, Epoxy/polyester powder coating",
            leg: "Steel, Epoxy/polyester powder coating",
            cover: "Polypropylene",
            wheel: "Polypropylene",
          },
        },
      },
      {
        name: "IKEA PS LOMSK",
        details: {
          type: "Swivel chair, white/red",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 199.99,
          onsale: true,
          stock: 8,
          rating: {
            stars: 4.5,
            reviews: 72,
          },
          description:
            "Round and round you go! Your child sets the pace – spinning slowly relaxes; spinning quickly develops balance. When your child pulls down the hood, it becomes a cozy hideaway.",
          product_details: [
            "With the hood pulled down the chair is a secret hiding place for a child.",
            "The fabric lets light in so it's never completely dark under the hood.",
            "Spinning helps the brain sort sensory impressions.",
            "Add a cushion or pad for more comfort.",
          ],
          materials: {
            fabric: "100 % polyester",
            plastic_fitting: "Reinforced polyamide",
            seat_shell: "Polypropylene",
            seat: "Polypropylene",
            base_cover: "Polypropylene",
            base_plate: "Steel, Epoxy/polyester powder coating",
          },
        },
      },
      {
        name: "HAVBERG",
        details: {
          type: "Swivel chair, Lejde gray/black",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
          ],
          price: 399.0,
          onsale: false,
          stock: 0,
          rating: {
            stars: 3,
            reviews: 6,
          },
          description:
            "Sit down, lean back and relax. HAVBERG swivel armchair is a new take on an IKEA classic. Timeless design for lazy evenings with a durable grey-black fabric cover that goes with everything.",
          product_details: [
            "HAVBERG swivel armchair has an inviting and timeless design that feels cozy when you sit down to relax.",
            "The swivel function allows for more flexibility, for example if you want to turn around and easily reach the remote control or a beverage and a snack.",
            "To sit even more comfortably and relaxed, complement the swivel armchair with HAVBERG footstool, allowing you to stretch out and rest your feet.",
            "The seat cushion is filled with polyurethane foam that provides a soft comfort and an embracing feeling.",
            "The cover is woven in a strong fabric that creates a visible texture and makes it more hardwearing.",
            "The swivel armchair is easy to assemble, so you can quickly sit down and relax.",
            "10-year limited warranty. Read about the terms in the limited warranty brochure.",
          ],
          materials: {
            supporting_fabric: "100 % polypropylene",
            seat_frame:
              "100% polyester (min. 80% recycled), Polyurethane foam 1.5 lb/cu.ft., Felt, Polyurethane foam 2.2 lb/cu.ft., Epoxy/polyester powder coating, Steel",
            star_base: "Steel, Polypropylene, Epoxy/polyester powder coating",
            rod: "Steel, Epoxy/polyester powder coating",
            zipper: "100 %polyester",
            hook_and_loop_fastener: "100 % nylon",
            fabric: "71 % cotton, 21 %polyester, 8 % viscose/rayon",
          },
        },
      },
      {
        name: "ORFJALL",
        details: {
          type: "Swivel chair, white/Vissle light gray",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
            "img7.avif",
          ],
          price: 99.99,
          onsale: true,
          stock: 92,
          rating: {
            stars: 4.5,
            reviews: 148,
          },
          description:
            "This swivel chair offers good comfort for many years - thanks to high-quality density foam in the seat and back. The castors have a brake mechanism that keeps the chair in place when you stand up.",
          product_details: [
            "High-quality density foam will keep the chair comfortable for many years to come.",
            "You sit comfortably since the chair is adjustable in height.",
            "The safety casters have a pressure-sensitive brake mechanism that keeps the chair in place when you stand up, and releases automatically when you sit down.",
            "The casters are rubber coated to run smoothly on any type of floor.",
          ],
          materials: {},
        },
      },
      {
        name: "TOSSBERG",
        details: {
          type: "Swivel chair, Gunnared beige/white",
          images: ["img1.avif", "img2.avif", "img3.avif", "img4.avif"],
          price: 284.99,
          onsale: true,
          stock: 13,
          rating: {
            stars: 4.5,
            reviews: 3,
          },
          description:
            "Swivel chair with a soft shape and nice padding. Upholstered in a durable fabric that blends well in all types of rooms, and with castors that make it easy to move.",
          product_details: [
            "The seat comprises of high-resilience foam that retains its shape and has a structure that allows air to circulate, giving you a comfortable surface to sit on.",
            "You sit comfortably since the chair is adjustable in height.",
            "The safety casters have a pressure-sensitive brake mechanism that keeps the chair in place when you stand up, and releases automatically when you sit down.",
            "The high backrest and the curved shape of the chair, provide good lower back support and prevent your back from getting tired. You sit comfortably and longer with a relaxed posture.",
            "This swivel chair goes well in all types of rooms and offers nice seating, whether you’re doing homework, hobbies, or just paying bills.",
            "Goes nicely with TOSSBERG dining chairs.",
          ],
          materials: {
            seat_shell_fabric: "100% polyester (min. 90% recycled)",
            frame:
              "100% polyester (min. 40% recycled), Fiberboard, High resilient polyurethane foam (cold foam)., Steel, Non-woven polypropylene",
            seat_cushion:
              "100% polyester (min. 40% recycled), High resilient polyurethane foam (cold foam).",
            adapter: "Steel, Epoxy/polyester powder coating",
            chair_frame: "Steel, Epoxy/polyester powder coating",
            swivel: "Steel, Epoxy/polyester powder coating",
            lamella_seat_lock: "Steel, Epoxy/polyester powder coating",
            gas_cylinder: "Steel, Epoxy/polyester powder coating",
            star_base_center: "Steel, Epoxy/polyester powder coating",
            leg: "Steel, Epoxy/polyester powder coating",
            cover: "Polypropylene",
            wheel: "Polypropylene",
          },
        },
      },
      {
        name: "BLECKBERGET",
        details: {
          type: "Swivel chair, Idekulla light green",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
          ],
          price: 89.99,
          onsale: true,
          stock: 56,
          rating: {
            stars: 4.5,
            reviews: 73,
          },
          description:
            "BLECKBERGET is inspired by traditional chairs from the 50’s and 60’s, but with a modern twist to suit today’s way of life and work. Nice to look at, comfortable to sit on and easy to use everywhere at home.",
          product_details: [
            "With its swivel function and adjustable seat, you can easily find a working position that suits you and feels comfy. The chair is also easy to store when not in use since it has no armrests.",
            "The practical and comfortable swivel function allows you to easily get up from the desk without moving the chair.",
            "Generous padding in the seat and backrest makes this chair a great choice if you want to sit comfortably at the desk.",
            "The safety casters have a pressure-sensitive brake mechanism that keeps the chair in place when you stand up, and releases automatically when you sit down.",
            "Neat, compact and easy to place – even in small rooms. Complements LAGKAPTEN/MITTBACK desk in both size and style.",
          ],
          materials: {
            backrest_frame: "Steel, Epoxy powder coating",
            seat_frame: "Steel, Epoxy powder coating",
            star_base_center: "Steel, Epoxy powder coating",
            leg: "Steel, Epoxy powder coating",
            comfort_filling: "Polyurethane foam.",
            cover: "Polypropylene",
            fabric: "100% polyester (min. 90% recycled)",
          },
        },
      },
      {
        name: "SMALLEN",
        details: {
          type: "Swivel chair, black",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 34.99,
          onsale: true,
          stock: 119,
          rating: {
            stars: 4,
            reviews: 20,
          },
          description:
            "SMÄLLEN swivel chair has a clean expression that is easy to match with other furniture and it has a texture that adds a feeling of quality and character. A simple design that’s easy to enjoy!",
          product_details: [
            "You sit comfortably since the chair is adjustable in height.",
            "To adjust the seat height, spin the seat upwards or downwards.",
            "You sit comfortably thanks to the seat’s generous size and the high backrest that provides good back support.",
            "The texture of the seat is inspired by the pattern on golf balls, a classic expression that adds a nice look to the chair and makes the seat easier to keep clean.",
            "Easy to keep clean by just wiping with a damp cloth.",
            "Plastic feet protect your floor from scratches.",
          ],
          materials: {
            seat: "Polypropylene plastic (min. 20% recycled)",
            backrest: "Polypropylene plastic (min. 20% recycled)",
            seat_frame: "Steel, Epoxy/polyester powder coating",
            backrest_frame: "Steel, Epoxy/polyester powder coating",
            hub: "Steel, Epoxy/polyester powder coating",
            leg: "Steel, Epoxy/polyester powder coating",
            threaded_column:
              "Polyamide, Steel, Galvanized, Epoxy/polyester powder coating",
            cover: "Acetal plastic, Polypropylene",
            end_cap: "Polypropylene",
          },
        },
      },
      {
        name: "BALTSAR",
        details: {
          type: "Swivel chair, black",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 225.0,
          onsale: false,
          stock: 12,
          rating: {
            stars: 4.5,
            reviews: 13,
          },
          description:
            "Function and style in nice unity. This black swivel chair is an eye-catcher and so comfy that you or your guests happily sit longer at the dining table – and it’s easy to turn if someone wants to get up.",
          product_details: [
            "The practical and comfortable swivel function allows you to easily get up from the table without moving the chair.",
            "Comfortable to sit on thanks to the bowl-shaped seat and rounded shape of the backrest.",
            "Easy to assemble without tools or screws.",
            "Easy to clean",
          ],
          materials: {
            Base: "Reinforced polyamide",
            base_plate: "Reinforced polyamide",
            threaded_column: "Reinforced polyamide",
            mechanism: "Steel, Powder coating",
            plate: "Steel, Powder coating",
            ring: "Steel, Galvanized",
            feet: "Synthetic rubber",
            seat_shell: "Polycarbonate plastic",
            seat_cushion:
              "100 % polyester (100% recycled), 100 % Synthetic rubber, Polyester wadding",
          },
        },
      },
      {
        name: "ODGER",
        details: {
          type: "Swivel chair, white/beige",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
            "img7.avif",
            "img8.avif",
            "img9.avif",
          ],
          price: 189.99,
          onsale: true,
          stock: 18,
          rating: {
            stars: 4.5,
            reviews: 10,
          },
          description:
            "Simple design with good comfort. The bowl-shaped seat and rounded shape of the backrest make ODGER swivel chair comfy. Adjustable height and swivel allows you to find a sitting position that suits you.",
          product_details: [
            "Comfortable seating position, thanks to the swivel and adjustable height.",
            "No tools are required to assemble the chair, you just click it together with a simple mechanism under the seat.",
            "Comfortable to sit on thanks to the bowl-shaped seat and rounded shape of the backrest.",
          ],
          materials: {
            seat_shell: "Wood Plastic Composite",
            connector: "Wood Plastic Composite",
            adjustment_lever: "Wood Plastic Composite",
            swivel_base: "Wood Plastic Composite",
            Handle: "Polypropylene",
            Upper_tube: "Aluminum",
            lower_tube: "Aluminum",
            gas_cylinder: "Steel, Epoxy/polyester powder coating",
            feet: "Synthetic rubber",
          },
        },
      },
      {
        name: "BJORKBERGET",
        details: {
          type: "Swivel chair, Idekulla beige",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 119.99,
          onsale: true,
          stock: 33,
          rating: {
            stars: 4.5,
            reviews: 43,
          },
          description:
            "BJÖRKBERGET is a versatile chair that’s great throughout the home. The elegant and simple design adds an airy and light expression to your home office, dining area or dressing table.",
          product_details: [
            "With its swivel function and adjustable seat, you can easily find a working position that suits you and feels comfy. The chair is also easy to store when not in use since it has no armrests.",
            "The practical and comfortable swivel function allows you to easily get up from the desk or makeup table without moving the chair.",
            "Details such as visible stitching in the seat and backrest give the chair an elaborate look and a touch of retro style.",
            "Generous padding in the seat and backrest makes this chair a great choice if you want to sit comfortably at the desk.",
            "The cover is easy to keep clean since it is removable and can be machine washed, while the perfect fit makes it look just as neat as a fixed cover.",
            "Adjustable feet make it sit securely on uneven floors.",
            "Neat, compact and easy to place – even in small rooms. Complements HAUGA and LOMMARP desks in both size and style.",
          ],
          materials: {
            wadding: "Polyester wadding",
            inside_frame: "Polypropylene",
            backrest_frame: "Steel, Epoxy/polyester powder coating",
            mechanism: "Steel, Epoxy/polyester powder coating",
            gas_cylinder: "Steel, Epoxy/polyester powder coating",
            leg: "Steel, Epoxy/polyester powder coating",
            hook_and_loop_fastener: "100 % nylon",
            lining: "100 % polypropylene",
            foam: "Polyurethane foam.",
            seat_frame: "Layer-glued wood veneer",
            foot: "Polyamide",
            fabric: "100% polyester (min. 90% recycled)",
          },
        },
      },
      {
        name: "ALEBY",
        details: {
          type: "Swivel chair, Gunnared medium gray/dark gray",
          images: ["img1.avif", "img2.avif", "img3.avif", "img4.avif"],
          price: 399.0,
          onsale: false,
          stock: 9,
          rating: {
            stars: 5,
            reviews: 8,
          },
          description:
            " You can lean back and relax with perfect balance in ÄLEBY swivel armchair. It has a mechanism that allows you to adjust the resistance – and easily lock the tilt angle in 2 different positions.",
          product_details: [
            "This swivel chair has adjustable tilt tension that allows you to adjust the resistance to suit your movements and weight.",
            "To adjust the tilt tension, turn the knob under the seat to increase or decrease the resistance.",
            "You can easily adjust the resistance of the tilt angle – and lock the armchair in 2 different positions.",
            "10 year Limited warranty. Read about the terms in the warranty brochure.",
          ],
          materials: {
            fabric: "100 %polyester (min. 90% recycled)",
            frame:
              "100% polyester (min. 80% recycled), Polyurethane foam 2.0 lb/cu.ft., Layer-glued wood veneer, Polyethylene, Polyurethane foam 1.2 lb/cu.ft.",
            star_base: "Steel, Epoxy/polyester powder coating",
          },
        },
      },
    ],
  },
  {
    categories: "Conference Chair",
    items: [
      {
        name: "LANGFJALL",
        details: {
          type: "Conference chair with armrests, Gunnared beige/black",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
            "img7.avif",
          ],
          price: 239.99,
          onsale: true,
          stock: 5,
          rating: {
            stars: 4.5,
            reviews: 10,
          },
          description:
            "The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there’s a tilt- and height-adjusting mechanism that’s built to outlast years of ups and downs.",
          product_details: [
            "You can lean back with perfect balance, as the tilt tension mechanism is easy to adjust with an Allen key to suit your weight and movements.",
            "Your back gets support and extra relief from the built-in lumbar support.",
            "You easily find a comfortable seating posture thanks to the adjustable height and generous cold-foam seat.",
            "10-year Limited Warranty. Read about the terms in the Limited Warranty brochure.",
          ],
          materials: {
            seat: "Steel, Steel",
            seat_foam: "High resilient polyurethane foam (cold foam).",
            fabric: "100% polyester (min. 90% recycled)",
            star_base: "Aluminum, Epoxy/polyester powder coating",
            casters: "Polypropylene, Synthetic rubber",
            lamella_seat_lock: "Steel, Steel, Epoxy/polyester powder coating",
          },
        },
      },
      {
        name: "MULLFJALLET",
        details: {
          type: "Conference chair with casters, Naggen beige",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
            "img7.avif",
          ],
          price: 299.99,
          onsale: true,
          stock: 10,
          rating: {
            stars: 4.5,
            reviews: 41,
          },
          description:
            "This swivel chair is kind to your body and nice to look at, with soft lines accentuated by stitched tufting. Enjoy the comfort and feel free to remove the cover and wash when needed.",
          product_details: [
            "10-year Warranty. Read about the terms in the warranty brochure.",
            "Suitable for business use.",
            "Design highlighted by slightly curved lines, sewn details and an easy-use mechanism discreetly hidden under the seat.",
            "The cover is easy to keep clean since it is removable and can be machine washed, while the perfect fit makes it look just as neat as a fixed cover.",
            "This durable cover is made from Naggen fabric and has a cozy natural feel with a linen effect. It gives a warm look to the traditional cover.",
            "Height-adjustable seat allows you to adjust the height so that back and legs are at a 90° angle.",
            "The lumbar support helps maintain the correct posture while sitting which reduces strain on muscles on your lower back.",
            "You can lean back with perfect balance, as the tilt tension mechanism is easy to adjust with an Allen key to suit your weight and movements.",
            "The high backrest and the curved shape of the chair, provide good lower back support and prevent your back from getting tired. You sit comfortably and longer with a relaxed posture.",
            "Increased stability since the tilt function is lockable when the backrest is in the upright position.",
            "A safety function locks the castors when no one is sitting in the chair and keeps it securely in place when you stand up.",
            "The castors are designed to provide ease of movement and maneuverability on both carpeted and hard floors as well as on uneven surfaces.",
          ],
          materials: {
            connecting_plate: "Steel, Epoxy/polyester powder coating",
            mechanism: "Steel, Epoxy/polyester powder coating",
            gas_cylinder: "Steel, Epoxy/polyester powder coating",
            star_base_center: "Steel, Epoxy/polyester powder coating",
            star_base_leg: "Steel, Epoxy/polyester powder coating",
            seat_frame: "Steel",
            spring: "Steel",
            pad: "Polyurethane foam.",
            comfort_filling: "Polyurethane foam.",
            seat: "Layer-glued wood veneer",
            fabric: "100 %polyester, Non-woven polypropylene",
            lining: "Non-woven polypropylene, Non-woven polypropylene",
            wadding: "Polyester wadding",
            hook_and_loop_fastener: "100 %polyester",
            cover_cap: "Polypropylene",
            cover: "Polypropylene",
            insert: "Polypropylene",
            castor: "Polypropylene, Synthetic rubber",
            cover_lining: "Non-woven polypropylene",
            core_filling: "Polyurethane foam.",
            armrest_frame: "Steel",
            mounting_plate: "Steel",
            armrest_cover_cap: "Polypropylene",
            mounting_cover_cap: "Polyamide",
            cover_fabric: "100% polyester (min. 90% recycled)",
          },
        },
      },
      {
        name: "TOSSBERG",
        details: {
          type: "Conference chair, Gunnared beige/white",
          images: ["img1.avif", "img2.avif", "img3.avif"],
          price: 359.99,
          onsale: true,
          stock: 3,
          rating: {
            stars: 4,
            reviews: 12,
          },
          description:
            "Swivel chair with a soft shape and nice padding. Upholstered in a durable fabric that blends well in all types of rooms, and with castors that make it easy to move.",
          product_details: [
            "The seat comprises of high-resilience foam that retains its shape and has a structure that allows air to circulate, giving you a comfortable surface to sit on.",
            "The safety casters have a pressure-sensitive brake mechanism that keeps the chair in place when you stand up, and releases automatically when you sit down.",
            "You can lean back with perfect balance, as the tilt tension mechanism is easy to adjust with an Allen key to suit your weight and movements.",
            "The high backrest and the curved shape of the chair, provide good lower back support and prevent your back from getting tired. You sit comfortably and longer with a relaxed posture.",
            "Goes nicely with TOSSBERG dining chairs.",
          ],
          materials: {
            seat_shell_fabric: "100% polyester (min. 90% recycled)",
            frame:
              "100% polyester (min. 40% recycled), Fiberboard, High resilient polyurethane foam (cold foam)., Steel, Non-woven polypropylene",
            seat_cushion:
              "100% polyester (min. 40% recycled), High resilient polyurethane foam (cold foam).",
            adapter: "Steel, Epoxy/polyester powder coating",
            star_base: "Aluminum, Epoxy/polyester powder coating",
            casters: "Polypropylene, Synthetic rubber",
            lamella_seat_lock: "Steel, Steel, Epoxy/polyester powder coating",
          },
        },
      },
      {
        name: "FJALLBERGET",
        details: {
          type: "Conference chair with casters, black stained ash veneer/Gunnared dark gray",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 329.99,
          onsale: true,
          stock: 0,
          rating: {
            stars: 4,
            reviews: 28,
          },
          description:
            "FJÄLLBERGET conference chair is versatile with an elegant shape and compact design. It has a soft seat, is height-adjustable and perfect for moving around the room thanks to the rubber-coated castors.",
          product_details: [
            "10-year Limited Warranty. Read about the terms in the Limited Warranty brochure.",
            "You sit comfortably since the chair is adjustable in height.",
            "The molded high resilience foam provides great comfort that will last for years.",
            "The safety casters have a pressure-sensitive brake mechanism that keeps the chair in place when you stand up, and releases automatically when you sit down.",
          ],
          materials: {
            star_base: "Aluminum, Epoxy/polyester powder coating",
            castor: "Polypropylene, Synthetic rubber",
            fabric: "100% polyester (min. 90% recycled)",
            back_frame:
              "Layer-glued wood veneer, Oak veneer, Clear acrylic lacquer",
            seat_foam: "High resilient polyurethane foam (cold foam).",
            layer_glued_seat: "Layer-glued wood veneer",
          },
        },
      },
      {
        name: "LAKTARE",
        details: {
          type: "Conference chair, light green/white",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
          ],
          price: 159.99,
          onsale: true,
          stock: 21,
          rating: {
            stars: 3,
            reviews: 14,
          },
          description:
            "Comfy, elegant and easy-to-place conference chair. It’s sturdy yet lightweight and stackable to save space but can also be hung on the table for easy cleaning. Removable/washable cover. 10-year guarantee.",
          product_details: [
            "10-year Warranty. Read about the terms in the warranty brochure.",
            "Suitable for business use.",
            "The chair cover is easy to remove and wash, helping to keep your conference room looking clean and fresh.",
            "Save space when the chairs are not in use. Stack up to 5 chairs with fabric cover, or 7 chairs without the cover.",
            "Lightweight and easy to move or re-arrange according to the needs of your meetings.",
            "Rubber armrests keep the chair in place when you hang it over the tabletop for easy cleaning of floors. The darker color conceals dirt that comes from frequent use.",
            "Shorter armrests allow you to sit closer to the table for a better posture. Also, you do not have to push it out as far when getting up from the chair.",
            "Rubber chair feet protect the floor and reduce noise from moving chairs.",
            "Armrests provide support for the upper part of your forearms and reduce strain on the back and shoulders during long meetings.",
            "The lumbar support helps maintain the correct posture while sitting which reduces strain on muscles on your lower back.",
            "The soft plate underneath the chair seat prevents scratching on the seat surface when the chairs are stacked.",
            "This cover is made of dope dyed GUNNARED fabric in polyester. It is a durable fabric with a wool-like feel, a warm look and a two-toned mélange effect.",
            "The covers are soft and comfy, made from 90% recycled polyester. Available in several colors for an easy match with the other furniture in the room.",
            "Chair covers have a simple and elegant expression that is easy to place in any conference room. Keep a few extra covers at hand for quick and easy updates when needed.",
            "Create a color-coordinated office. Use chair covers with different colors for different meeting and work areas.",
            "LÄKTARE conference chair pairs up perfectly with LÅNGFJÄLL conference chair and HATTEFJÄLL office chair.",
          ],
          materials: {
            chair_cover_fabric: "100% polyester (min. 90% recycled)",
            back_fabric: "100 % polyester (100% recycled)",
            filling: "Polyester (min. 80% recycled)",
            hook_and_loop_fastener: "100 % nylon",
            elastic_band: "50 % polypropylene, 50 % rubber",
            seat_shell:
              "Layer-glued wood veneer, Birch veneer, Tinted lacquer, Clear acrylic lacquer",
            seat_hook_and_loop_fastener: "100 % nylon",
            spacer: "Plywood, Tinted lacquer",
            frame: "Steel, Epoxy/polyester powder coating",
            cover: "Polypropylene plastic (min. 20% recycled)",
            foot: "Polyamide",
          },
        },
      },
    ],
  },
  {
    categories: "Reclining Chair",
    items: [
      {
        name: "EKOLSUND",
        details: {
          type: "Recliner, Gunnared dark gray",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 429.0,
          onsale: false,
          stock: 11,
          rating: {
            stars: 4,
            reviews: 52,
          },
          description:
            "EKOLSUND recliner has soft rounded shapes which are sized to fit in even small spaces. Adjustable in three positions – so choose whether you want to sit upright, lean back or lie back for a nap.",
          product_details: [
            "You can set this reclining armchair in 3 positions – upright, lean back and full recline – making it easy to adapt to various activities at home.",
            "The cover is easy to keep clean since it is removable and can be machine washed, while the perfect fit makes it look just as neat as a fixed cover.",
            "The footrest folds out from the seat without leaving a gap, so you can rest safely without any risk of children’s fingers getting caught in the chair.",
            "The back cushion has a chambered construction, designed to adjust to your body and provide maximum support to your lumbar and neck.",
            "The seat cushion is filled with polyurethane foam that provides a soft comfort and an embracing feeling.",
            "The cushions are wrapped in polyester wadding to keep their comfort and neat shapes when used.",
            "Easy to bring home in 3 packages ― and is assembled and disassembled in a few simple steps.",
            "10 year Limited warranty. Read about the terms in the warranty brochure.",
          ],
          materials: {
            frame_recliner:
              "Particleboard, Plywood, Solid beech, Polyurethane foam 1.2 lb/cu.ft., Felt liner",
            seat_cushion:
              "High-resilience polyurethane foam (cold foam) 2.2 lb/cu.ft.",
            back_cushion: "Polyester fiber balls",
            smolder_resistant_lining: "Polyester wadding",
            mechanism: "Steel, Steel, Polypropylene, Paint",
            bracket: "Steel, Epoxy/polyester powder coating",
            leg: "Steel, Epoxy/polyester powder coating",
            zig_zag_spring: "Steel",
            thread: "100% polyester",
            zipper: "100% polyester",
            fabric: "100% polyester (min. 90% recycled)",
          },
        },
      },
      {
        name: "MUREN",
        details: {
          type: "Recliner, Remmarn dark gray",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
          ],
          price: 479.0,
          onsale: false,
          stock: 6,
          rating: {
            stars: 4,
            reviews: 46,
          },
          description:
            "Take a seat in MUREN recliner and get a pleasant surprise. It is adjustable to three positions and comes with an inbuilt footstool. While sitting, use your back to press against the backrest - it lowers and the footstool lifts up. Now relax and enjoy!",
          product_details: [
            "Adjustable so that you can choose three positions, from upright sitting to reclining.",
            "When you lean backwards, the built-in footrest folds out.",
            "The high back provides good support for your neck.",
            "The removable armrest covers have pockets where you can keep small things like remote controls and glasses.",
            "Removable and washable covers for headrest and armrests prolong the life of your armchair.",
            "MUREN armchair comes in 2 easy-to-handle flat-packs. Easier for you to bring home, and the compact packages also takes up less space during transport – thereby reducing the armchair’s climate impact.",
          ],
          materials: {
            frame:
              "Particleboard, Plywood, Polyurethane foam 1.2 lb/cu.ft., Polyurethane foam 2.0 lb/cu.ft., Polyurethane foam 1.5 lb/cu.ft., Felt liner, Solid wood",
            seat_cushion: "Polyurethane foam 2.0 lb/cu.ft.",
            mechanism: "Steel, Polypropylene, Paint",
            leg: "Solid birch, Stain, Clear acrylic lacquer",
            fabric: "100% polyester (min. 90% recycled)",
          },
        },
      },
      {
        name: "GISTAD",
        details: {
          type: "Recliner, Idekulla dark red",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          price: 369.0,
          onsale: false,
          stock: 8,
          rating: {
            stars: 4.5,
            reviews: 71,
          },
          description:
            "Pamper yourself with a moment of comfy me-time. With this neat recliner you can choose if you want to sit upright, lean back or lie down for a quick nap – and put two together for some we-time!",
          product_details: [
            "You can set this reclining armchair in 3 positions – upright, lean back and full recline – making it easy to adapt to various activities at home.",
            "Choose between 2 fixed covers for your GISTAD recliner: the durable Bomstad coated fabric with the look and feel of leather, and Idekulla dark red fabric to add a warm and cozy atmosphere to the room.",
          ],
          materials: {
            frame:
              "Particleboard, Plywood, Solid pine, Polyurethane foam 1.2 lb/cu.ft., Polyurethane foam 2.0 lb/cu.ft., Polyurethane foam 1.5 lb/cu.ft., Felt liner, Fiberboard",
            seat_cushion:
              "Polyurethane foam 2.0 lb/cu.ft., High-resilience polyurethane foam (cold foam) 2.2 lb/cu.ft.",
            mechanism: "Steel, Polypropylene, Paint",
            bracket: "Steel, Epoxy/polyester powder coating",
            leg: "Steel, Epoxy/polyester powder coating",
            zig_zag_spring: "Steel",
            fabric: "100% polyester (min. 90% recycled)",
          },
        },
      },
      {
        name: "ENDORSUND",
        details: {
          type: "Recliner, Gunnared light brown-pink",
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
            "img6.avif",
          ],
          price: 429.0,
          onsale: false,
          stock: 9,
          rating: {
            stars: 4,
            reviews: 52,
          },
          description:
            "ENDORSUND recliner has soft rounded shapes which are sized to fit in even small spaces. Adjustable in three positions – so choose whether you want to sit upright, lean back or lie back for a nap.",
          product_details: [
            "You can set this reclining armchair in 3 positions – upright, lean back and full recline – making it easy to adapt to various activities at home.",
            "The cover is easy to keep clean since it is removable and can be machine washed, while the perfect fit makes it look just as neat as a fixed cover.",
            "The footrest folds out from the seat without leaving a gap, so you can rest safely without any risk of children’s fingers getting caught in the chair.",
            "The back cushion has a chambered construction, designed to adjust to your body and provide maximum support to your lumbar and neck.",
            "The seat cushion is filled with polyurethane foam that provides a soft comfort and an embracing feeling.",
            "The cushions are wrapped in polyester wadding to keep their comfort and neat shapes when used.",
            "Easy to bring home in 3 packages ― and is assembled and disassembled in a few simple steps.",
            "10 year Limited warranty. Read about the terms in the warranty brochure.",
          ],
          materials: {
            frame:
              "Particleboard, Plywood, Solid pine, Polyurethane foam 1.2 lb/cu.ft., Polyurethane foam 2.0 lb/cu.ft., Polyurethane foam 1.5 lb/cu.ft., Felt liner, Fiberboard",
            seat_cushion:
              "Polyurethane foam 2.0 lb/cu.ft., High-resilience polyurethane foam (cold foam) 2.2 lb/cu.ft.",
            mechanism: "Steel, Polypropylene, Paint",
            bracket: "Steel, Epoxy/polyester powder coating",
            leg: "Steel, Epoxy/polyester powder coating",
            zig_zag_spring: "Steel",
            fabric: "100% polyester (min. 90% recycled)",
          },
        },
      },
    ],
  },
];

export default data;
