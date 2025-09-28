const notesData = {
  Physics: {
    Thermodynamics: [
      "First law of thermodynamics: ΔU = Q - W...",
      "Entropy is a measure of disorder..."
    ],
    "Electromagnetic Waves": [
      "Maxwell’s equations describe the behavior of EM waves...",
      "Speed of light c = 1/√(μ₀ε₀)..."
    ],
    "Electrostatics": [
      "Coulomb’s Law: F = k(q1q2)/r²...",
      "Electric field lines point from + to -..."
    ],
    "Fluid Dynamics": [
      "Bernoulli’s principle relates pressure, velocity, height...",
      "Continuity equation: A1v1 = A2v2..."
    ]
  },
  C: {
    Variables: [
        "A variable is a named location in memory that stores a value which can be changed during program execution. Variables are used to hold data that your program needs to operate on.",
        "Rules for naming variables in C:",
        "1. The first character must be an alphabet (A-Z, a-z) or an underscore (_). It cannot be a digit (0-9).",
        "2. Subsequent characters can be alphabets, digits, or underscores.",
        "3. No spaces or special characters (like @, #, $, %, etc.) are allowed in variable names, except for the underscore.",
        "4. Variable names are case-sensitive, meaning that 'Variable', 'variable', and 'VARIABLE' would be considered different names.",
        "5. Variable names should not be the same as C keywords (like int, return, if, etc.) to avoid confusion.",
        "6. It's a good practice to use meaningful variable names that describe the purpose of the variable, which enhances code readability and maintainability.",
        "Examples of valid variable names: age, total_sum, _counter, userName1",
        "Examples of invalid variable names: 1stNumber (starts with a digit), total-sum (contains a hyphen), user name (contains a space), int (a reserved keyword)"
    ],
    Constants: [
        "A constant is a fixed value that cannot be altered by the program during its execution. Constants are used to represent values that should remain unchanged throughout the program.",
        "There are several types of constants in C:",
        "1. Integer Constants: These are whole numbers without a decimal point. They can be positive or negative. Examples: 0, 1, -5, 100",
        "2. Floating-point Constants: These are numbers with a decimal point. They can also be in scientific notation. Examples: 3.14, -0.001, 2.5e3 (which is 2.5 × 10³)",
        "3. Character Constants: These are single characters enclosed in single quotes. Examples: 'a', '1', '$', '\n' (newline character)",
        "4. String Constants: These are sequences of characters enclosed in double quotes. Examples: \"Hello, World!\", \"C Programming\"",
        "5. Enumeration Constants: These are user-defined constants that consist of a set of named integer constants. They are defined using the enum keyword.",
        "<pre><code>enum week { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };</code></pre>",
        "In this example, Sunday is assigned the value 0, Monday is 1, and so on.",
        "Constants can be defined using the #define preprocessor directive or the const keyword. Using constants in your code improves readability and maintainability.",
        "<pre><code>#define PI 3.14\nconst int MAX = 100;</code></pre>",
        "In this example, PI is defined as a macro constant, and MAX is defined as a constant integer variable.",
        "Using constants helps prevent accidental changes to values that should remain fixed, making your code more robust and easier to understand.",
    ],
    Keywords: [
    "These are reserved words whose meaning is already known to the compiler. There are 32 keywords in C.",
    "auto, break, case, char, const, continue, default, do, double, else, enum, extern, float, for, goto, if, inline, int, long, register, restrict, return, short, signed, sizeof, static, struct, switch, typedef, union, unsigned, void, volatile, while",
    ],
    Structure: [
        "All C program have to follow a basic structure. A C program start with a main() function and execute instructions inside it Each instruction has to be terminated with a semicolon (;)"
    ],
    Comments : [
        "Comments can be used to explain code, and to make it more readable. It can also be used to prevent execution when testing alternative code.",
        "Comments can be singled-lined or multi-lined.",
        "Single-line comments start with // and extend to the end of the line.",
        "Multi-line comments start with /* and end with */.",
        "<b>Good to know</b>: Before version C99 (released in 1999), you could only use multi-line comments in C."
    ],
    Interpreter: [
        "An interpreter is a program that directly executes instructions written in a programming or scripting language without requiring them to be compiled into machine code.",
        "Unlike a compiler, which translates the entire source code into machine code before execution, an interpreter reads and executes the code line by line or statement by statement.",
        "Interpreters are commonly used for scripting languages like Python, JavaScript, and Ruby, where rapid development and ease of testing are prioritized over execution speed.",
        "Advantages of using an interpreter:",
        "1. Immediate Execution: Code can be executed immediately without the need for a separate compilation step.",
        "2. Easier Debugging: Errors can be identified and fixed quickly since the code is executed line by line.",
        "3. Platform Independence: Interpreted languages can run on any platform with the appropriate interpreter installed.",
        "Disadvantages of using an interpreter:",
        "1. Slower Execution: Interpreted code generally runs slower than compiled code due to the overhead of interpretation.",
        "2. Runtime Errors: Errors may only be detected during execution, which can lead to unexpected behavior if not handled properly.",
        "Overall, interpreters are useful for rapid development, prototyping, and scripting tasks, while compiled languages are often preferred for performance-critical applications.",
        "Disadvantages of using an interpreter:",
        "1. Slower Execution: Interpreted code generally runs slower than compiled code due to the overhead of interpretation.",
        "2. Runtime Errors: Errors may only be detected during execution, which can lead to unexpected behavior if not handled properly.",
        "Overall, interpreters are useful for rapid development, prototyping, and scripting tasks, while compiled languages are often preferred for performance-critical applications."
    ],
    Compilation: [
        "A C program must be compiled before it can be executed. Compilation is the process of converting the source code into machine code that the computer's processor can understand.",
        "A compiler is a special program that performs this conversion. It checks the source code for errors and translates it into an executable file.",
        "To compile and run a C program, you need a C compiler installed on your system. GCC (GNU Compiler Collection) is a popular choice.",
        "Basic steps to compile and run a C program using GCC:",
        "1. Write your C code in a text file with a .c extension (e.g., program.c).",
        "2. Open a terminal and navigate to the directory where your C file is located.",
        "3. Compile the program using the command: gcc program.c -o program",],
    "Library Functions": [
        "C provides a rich set of built-in functions that can be used to perform various tasks. These functions are grouped into libraries, which can be included in your program using the #include directive.",
        "Some commonly used libraries in C:",
        "1. stdio.h: Standard Input and Output functions (e.g., printf, scanf).",
        "2. stdlib.h: Standard Library functions (e.g., malloc, free, rand).",
    ],
    "Receiving Input": [
        "In C, you can receive input from the user using the scanf() function, which is part of the stdio.h library.",
        "The scanf() function reads formatted input from the standard input (usually the keyboard) and stores it in the specified variables.",
        "Example of using scanf() to read an integer and a float:",
        "<pre><code>#include &lt;stdio.h&gt;\n\nint main() {\n    int age;\n    float height;\n\n    printf(\"Enter your age: \");\n    scanf(\"%d\", &age);\n\n    printf(\"Enter your height in meters: \");\n    scanf(\"%f\", &height);\n\n    printf(\"You are %d years old and %.2f meters tall.\\n\", age, height);\n    return 0;\n}</code></pre>",
        "In this example, %d is a format specifier for integers, and %f is for floating-point numbers. The & operator is used to provide the address of the variable where the input value will be stored."
    ], 
    "Type declaration": [
        "In C, you must declare the type of a variable before using it. This tells the compiler what kind of data the variable will hold.",
        "Common data types in C include:",
        "1. int: Integer type, used to store whole numbers (e.g., -1, 0, 1, 2).",
        "2. float: Floating-point type, used to store decimal numbers (e.g., 3.14, -0.001).",
        "3. double: Double-precision floating-point type, used for more precise decimal numbers.",
        "4. char: Character type, used to store single characters (e.g., 'a', '1', '$').",
        "5. void: Represents the absence of a value, often used for functions that do not return a value.",
        "Example of variable declaration:",
        "<pre><code>int age;\nfloat height;\nchar grade;</code></pre>",
        "You can also initialize a variable at the time of declaration:",
        "<pre><code>int age = 25;\nfloat height = 5.9;\nchar grade = 'A';</code></pre>"
    ],
    "Type conversion": [
        "Type conversion is the process of converting a variable from one data type to another. In C, there are two types of type conversion: implicit and explicit.",
        "1. Implicit Conversion: This occurs automatically when a value is assigned to a variable of a different type. For example, when an integer is assigned to a float variable, the integer is automatically converted to a float.",
        "Example of implicit conversion:",
        "<pre><code>int a = 5;\nfloat b = a; // 'a' is implicitly converted to float</code></pre>",
        "2. Explicit Conversion (Type Casting): This is done manually by the programmer using a cast operator. You can convert a variable to a different type by placing the desired type in parentheses before the variable.",
        "Example of explicit conversion:",
        "<pre><code>float x = 9.7;\nint y = (int)x; // 'x' is explicitly converted to int, resulting in 9</code></pre>",
        "Type conversion is useful when you need to perform operations between different data types or when you want to ensure that a variable is of a specific type."
    ],
    operators: [
      "Operators are used to perform operations on variables and values.",
      "<b>Types of operators</b>",
      "1. Arithmetic Operators: +, -, *, /, %, ++, -- <br> 2. Comparison Operators: ==, !=, >, <, >=, <= <br> 3. Logical Operators: &&, ||, ! <br> 4. Bitwise Operators: &, |, ^, ~, <<, >> <br> 5. Assignment Operators: =, +=, -=, *=, /=, %=, &=, |=, ^=, >>=, <<=",
      "Operator Precedence and Associativity: Operator precedence determines the order in which operators are evaluated in an expression. Operators with higher precedence are evaluated before those with lower precedence. Associativity determines the order of evaluation for operators with the same precedence level. Most operators in C are left associative, meaning they are evaluated from left to right. However, some operators, like the assignment operator (=), are right associative and are evaluated from right to left.",
      "For more information, visit <a href='https://www.w3schools.com/c/c_operators.php' target='_blank'>W3schools C Operators</a>",
    ],
    "Control Flow": [
      "Control flow statements are used to control the flow of execution in a program based on certain conditions.",
      "<b>Types of control flow statements</b>",
        "1. Conditional Statements: if, if-else, switch <br> 2. Looping Statements: for, while, do-while <br> 3. Jump Statements: break, continue, return",
    ],
    Conditional: [
        "Conditional statements are used to perform different actions based on different conditions.",
        "1. if statement: The if statement is used to execute a block of code if a specified condition is true.",
        "<pre><code>if (condition) {\n    // code to be executed if condition is true\n}</code></pre>",
        "2. if-else statement: The if-else statement is used to execute one block of code if a specified condition is true, and another block of code if the condition is false.",
        "<pre><code>if (condition) {\n    // code to be executed if condition is true\n} else {\n    // code to be executed if condition is false\n}</code></pre>",
        "3. if-else if-else statement: The if-else if-else statement is used to execute one block of code among multiple conditions.",
        "<pre><code>if (condition) {\n    // code to be executed if condition is true\n} else if (condition) {\n    // code to be executed if condition is true\n} else {\n    // code to be executed if condition is false\n}</code></pre>",
        "4. switch statement: The switch statement is used to perform different actions based on different values of a variable or expression.",
        "<pre><code>switch (expression) {\n    case value1:\n        // code to be executed if expression equals value1\n        break;\n    case value2:\n        // code to be executed if expression equals value2\n        break;\n    // more cases...\n    default:\n        // code to be executed if expression doesn't match any case\n}</code></pre>",
    ],
    Loops: [
        "Loops are used to execute a block of code repeatedly as long as a specified condition is true.",
        "1. for loop: The for loop is used to execute a block of code a specific number of times.",
        "<pre><code>for (initialization; condition; increment/decrement) {\n    // code to be executed\n}</code></pre>",
        "2. while loop: The while loop is used to execute a block of code as long as a specified condition is true.",
        "<pre><code>while (condition) {\n    // code to be executed\n}</code></pre>",
        "3. do-while loop: The do-while loop is similar to the while loop, but it guarantees that the block of code will be executed at least once before checking the condition.",
        "<pre><code>do {\n    // code to be executed\n} while (condition);</code></pre>",
        "4. Nested loops: You can use one loop inside another loop. This is called a nested loop.",
        "<pre><code>for (initialization; condition; increment/decrement) {\n    for (initialization; condition; increment/decrement) {\n        // code to be executed\n    }\n}</code></pre>",
        "5. Infinite loops: An infinite loop is a loop that never ends. This can happen if the condition is always true or if there is no condition to terminate the loop. Be careful when using infinite loops, as they can cause your program to hang or crash.",
        "<pre><code>while (1) {\n    // code to be executed\n}</code></pre>",
        "6. Loop control statements: You can use the break and continue statements to control the flow of a loop. The break statement is used to exit a loop prematurely, while the continue statement is used to skip the current iteration and move to the next iteration of the loop.",
        "<pre><code>for (int i = 0; i < 10; i++) {\n    if (i == 5) {\n        break; // exit the loop when i equals 5\n    }\n    if (i % 2 == 0) {\n        continue; // skip even numbers\n    }\n    printf(\"%d\\n\", i); // print odd numbers\n}</code></pre>",
    ],
    Arrays: [
        "An array is a collection of elements of the same data type, stored in contiguous memory locations. Arrays are used to store multiple values in a single variable, making it easier to manage and manipulate large sets of data.",
        "1. Declaring and initializing arrays: To declare an array, you need to specify the data type, the name of the array, and the number of elements it can hold. You can also initialize the array with values at the time of declaration.",
        "<pre><code>int numbers[5]; // declares an array of 5 integers\nint numbers[5] = {1, 2, 3, 4, 5}; // declares and initializes an array of 5 integers</code></pre>",
        "2. Accessing array elements: You can access individual elements of an array using their index. Array indices start at 0, so the first element is at index 0, the second element is at index 1, and so on.",
        "<pre><code>int firstNumber = numbers[0]; // accesses the first element of the array\nnumbers[1] = 10; // modifies the second element of the array</code></pre>",
        "3. Multidimensional arrays: C supports multidimensional arrays, which are arrays of arrays. The most common type of multidimensional array is a two-dimensional array, which can be thought of as a table or matrix.",
        "<pre><code>int matrix[3][4]; // declares a 2D array with 3 rows and 4 columns\nint matrix[3][4] = {\n    {1, 2, 3, 4},\n    {5, 6, 7, 8},\n    {9, 10, 11, 12}\n}; // declares and initializes a 2D array</code></pre>",
        "4. Array operations: You can perform various operations on arrays, such as iterating through the elements using loops, sorting the elements, and searching for specific values.",
        "<pre><code>for (int i = 0; i < 5; i++) {\n    printf(\"%d\\n\", numbers[i]); // prints each element of the array\n}</code></pre>",
        "5. Limitations of arrays: Arrays have a fixed size, which means you need to know the number of elements in advance. If you need a dynamic data structure that can grow or shrink in size, consider using pointers and dynamic memory allocation with functions like malloc() and free()."
    ], 
    Functions: [
        "A function is a block of code that performs a specific task. Functions help to organize code, make it reusable, and improve readability.",
        "1. Defining a function: To define a function, you need to specify the return type, the name of the function, and any parameters it takes. The function body contains the code that will be executed when the function is called.",
        "<pre><code>return_type function_name(parameter1_type parameter1, parameter2_type parameter2) {\n    // code to be executed\n    return value; // optional, depending on return type\n}</code></pre>",
        "2. Calling a function: To call a function, you simply use its name followed by parentheses containing any arguments that need to be passed to the function.",
        "<pre><code>function_name(argument1, argument2);</code></pre>",
        "3. Function parameters and arguments: Parameters are the variables defined in the function declaration, while arguments are the actual values passed to the function when it is called. The number and type of arguments must match the parameters defined in the function.",
        "4. Return values: A function can return a value using the return statement. The return type of the function must match the type of the value being returned. If a function does not return a value, its return type should be specified as void.",
        "5. Function prototypes: A function prototype is a declaration of a function that specifies its return type, name, and parameters without the function body. Prototypes are typically placed at the beginning of the program or in a header file to inform the compiler about the function before it is used.",
        "<pre><code>return_type function_name(parameter1_type parameter1, parameter2_type parameter2);</code></pre>",
        "6. Recursion: A function can call itself, which is known as recursion. Recursive functions must have a base case to prevent infinite loops and ensure that the recursion eventually terminates.",
        "<pre><code>int factorial(int n) {\n    if (n == 0) {\n        return 1; // base case\n    } else {\n        return n * factorial(n - 1); // recursive case\n    }\n}</code></pre>",
        "7. Scope and lifetime of variables: Variables defined within a function have local scope, meaning they can only be accessed within that function. The lifetime of these variables is limited to the duration of the function call. Once the function exits, the local variables are destroyed and their memory is freed.",
        "8. Passing by value vs. passing by reference: In C, function arguments are passed by value, meaning that a copy of the argument is made and passed to the function. Changes made to the parameter inside the function do not affect the original argument. To modify the original argument, you can pass a pointer to the variable (passing by reference).",
        "<pre><code>void modifyValue(int *ptr) {\n    *ptr = 10; // modifies the value at the address pointed to by ptr\n}\n\nint main() {\n    int num = 5;\n    modifyValue(&num); // passes the address of num\n    printf(\"%d\\n\", num); // prints 10\n    return 0;\n}</code></pre>"
    ],
    Pointers: [
        "A pointer is a variable that stores the memory address of another variable. Pointers are used for dynamic memory allocation, arrays, and functions.",
        "1. Declaring and initializing pointers: To declare a pointer, you need to specify the data type it points to, followed by an asterisk (*) and the pointer's name. You can initialize a pointer by assigning it the address of a variable using the address-of operator (&).",
        "<pre><code>int *ptr; // declares a pointer to an integer\nint num = 5;\nptr = &num; // initializes the pointer with the address of num</code></pre>",
        "2. Dereferencing pointers: Dereferencing a pointer means accessing the value stored at the memory address it points to. You can dereference a pointer using the asterisk (*) operator.",
        "<pre><code>int value = *ptr; // dereferences ptr to get the value of num\n*ptr = 10; // modifies the value of num through the pointer</code></pre>",
        "3. Pointer arithmetic: You can perform arithmetic operations on pointers, such as incrementing or decrementing them. When you increment a pointer, it moves to the next memory location based on the size of the data type it points to.",
        "<pre><code>ptr++; // moves the pointer to the next integer location\nptr--; // moves the pointer to the previous integer location</code></pre>",
        "4. Pointers and arrays: In C, arrays and pointers are closely related. The name of an array acts as a pointer to its first element. You can use pointer arithmetic to traverse an array.",
        "<pre><code>int arr[5] = {1, 2, 3, 4, 5};\nint *p = arr; // p points to the first element of arr\nfor (int i = 0; i < 5; i++) {\n    printf(\"%d\\n\", *(p + i)); // accesses each element of the array using pointer arithmetic\n}</code></pre>",
        "5. Pointers to pointers: You can have pointers that point to other pointers. This is useful for dynamic memory allocation and multi-dimensional arrays.",
        "<pre><code>int num = 5;\nint *ptr = &num; // pointer to an integer\nint **pptr = &ptr; // pointer to a pointer\nprintf(\"%d\\n\", **pptr); // dereferences pptr to get the value of num</code></pre>",
        "6. Dynamic memory allocation: Pointers are essential for dynamic memory allocation, which allows you to allocate memory at runtime using functions like malloc(), calloc(), realloc(), and free().",
        "<pre><code>int *arr = (int *)malloc(5 * sizeof(int)); // allocates memory for an array of 5 integers\nif (arr == NULL) {\n    // handle memory allocation failure\n}\n// use the array...\nfree(arr); // frees the allocated memory</code></pre>",
        "7. Function pointers: You can create pointers that point to functions. Function pointers are useful for implementing callback functions and for passing functions as arguments to other functions.",
        "<pre><code>void greet() {\n    printf(\"Hello, World!\\n\");\n}\n\nint main() {\n    void (*funcPtr)() = greet; // declares a function pointer and initializes it to point to greet\n    funcPtr(); // calls the function through the pointer\n    return 0;\n}</code></pre>"
    ],
  },
  Math: {
    Calculus: [
      "Derivative is the rate of change of a function...",
      "Integral is the area under a curve..."
    ],
    Algebra: [
      "Quadratic formula: x = (-b ± √(b²-4ac))/2a...",
      "Matrices have rows and columns..."
    ]
  },
  "Manufacturing Processes": {
    Manufcturing: [
      "Bear Grylls is my idol",
      "Modiji once collabed with Bear Grylls and he spoke in hindi despite knowing that he doesn't understand a thing."
    ],
    Casting: [
      "IDK",
    ]
  },
  EVS: {
    'Multi Disciplinary Nature of Environment': [
      "Enviroment studies is that branch of science which deals with the understanding of environment and the biotic and abiotic components of environment and our existence with them.",
      "It focuses on understanding:",
      "1. Natural components of environment: air, water, land, soil, minerals, plants, animals, etc.",
      "2. Human interaction with environment: how human activities impact the environment and how environmental changes affect human life.",
      "3. Issues and solutions: environmental problems like pollution, deforestation, climate change, and sustainable practices to mitigate these issues.",
      "4. Awareness and Responsibility: promoting environmental awareness and encouraging responsible behavior towards the environment.",
      "5. Interdisciplinary Approach: integrating knowledge from various disciplines like biology, chemistry, physics, geography, economics, sociology, and political science to address environmental challenges.",
      "Overall, environment studies aims to create a holistic understanding of the environment and our role in preserving it for future generations."
    ],
    "Objectives of Environmental Studies": [
        "1. Understanding the Environment: To gain a comprehensive understanding of the natural and human-made components of the environment and their interactions.",
        "2. Awareness of Environmental Issues: To raise awareness about environmental problems such as pollution, deforestation, climate change, and biodiversity loss.",
        "3. Sustainable Development: To promote sustainable practices that balance economic growth, social well-being, and environmental protection.",
        "4. Conservation of Natural Resources: To encourage the responsible use and conservation of natural resources like water, air, soil, minerals, plants, and animals.",
        "5. Environmental Ethics: To foster a sense of responsibility and ethical behavior towards the environment among individuals and communities.",
        "6. To develop skills for environmental problem-solving and decision-making.",
    ],
    "Ways to instill public awareness": [
      "1. Education and Outreach: Implementing environmental education programs in schools, colleges, and communities to raise awareness about environmental issues and their impact on daily life.",
      "2. Media Campaigns: Utilizing various media platforms such as television, radio, social media, and print media to disseminate information about environmental conservation and sustainable practices.",
      "3. Community Engagement: Organizing community events, workshops, and seminars to involve local communities in environmental initiatives and encourage active participation.",
      "4. Government Policies and Regulations: Enforcing environmental laws and regulations to promote sustainable practices and penalize activities that harm the environment.",
      "5. Collaboration with NGOs and Environmental Organizations: Partnering with non-governmental organizations and environmental groups to amplify awareness campaigns and implement conservation projects.",
      "6. Promoting Eco-friendly Practices: Encouraging individuals and businesses to adopt eco-friendly practices such as recycling, reducing waste, conserving energy, and using sustainable products.",
      "7. Role Models and Influencers: Engaging celebrities, influencers, and community leaders to advocate for environmental causes and inspire others to take action.",
      "8. Public Participation in Environmental Decision-making: Involving the public in environmental planning and decision-making processes to ensure their voices are heard and their concerns are addressed."
    ]
  }
};
