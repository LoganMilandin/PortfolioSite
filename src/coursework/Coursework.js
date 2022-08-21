import { Stack, Box, Paper, Typography } from "@mui/material";
import PaperWrapper from "../PaperWrapper/PaperWrapper";

const Coursework = () => {
  return (
    <Stack>
      <PaperWrapper elevation={3}>
        <Typography>
          In reverse chronological order, here is a list of all the STEM classes
          I have taken and my summaries (with some copying from UW's course
          catalog) of their content. This list mostly exists to help me track
          and retain the information I learned in school.
        </Typography>
        <Typography variant="h4">Computer Science</Typography>
        <ul style={{ display: "grid", gap: "10px" }}>
          <li>
            <Typography>
              CSE452: Distributed Systems - Covers abstractions and
              implementation techniques in the construction of distributed
              systems, including cloud computing, distributed storage systems,
              and distributed caches. Lectures are theory-heavy and focus on
              fundamental algorithms such as the Paxos consensus protocol,
              assignments are programming-heavy and intended to highlight the
              practical challenges faced during implementation of a distributed
              application.
            </Typography>
          </li>
          <li>
            <Typography>
              CSE401: Introduction to Compiler Construction - Fundamentals of
              compilers and interpreters; symbol tables; lexical analysis,
              syntax analysis, semantic analysis, code generation, and
              optimizations for general purpose programming languages.
              Coursework is based around the end-to-end construction a compiler
              for a subset of Java, with each assignment involving the
              implementation of one or more of the phases listed above.
            </Typography>
          </li>
          <li>
            <Typography>
              CSE440: Introduction to HCI - Human-Computer Interaction (HCI)
              theory and techniques. Methods for designing, prototyping, and
              evaluating user interfaces to computing applications. Human
              capabilities, interface technology, interface design methods, and
              interface evaluation tools and techniques. Coursework is built
              around a group project which includes the full design,
              prototyping, and presentation of a user application.
            </Typography>
          </li>
          <li>
            <Typography>
              CSEM584: Computer Security - Foundations of modern computer
              security, including software security, operating system security,
              network security, applied cryptography, human factors,
              authentication, anonymity, and web security. Coursework is a mix
              of written assignments to develop understanding of fundamental
              security mechanisms and programming labs in which students
              implement common exploits like buffer-overflow attacks. CSEM584 is
              the grad offering of CSE484 and includes additional homeworks to
              read and analyze research papers.
            </Typography>
          </li>
          <li>
            <Typography>
              CSE421: Introduction to Algorithms - Techniques for design of
              efficient algorithms. Methods for showing lower bounds on
              computational complexity. Particular algorithms for sorting,
              searching, set manipulation, arithmetic, graph problems, pattern
              matching. Coursework is theory-based, with typical assignments
              being to design algorithms to solve a set of problems, prove their
              correctness, and prove a bound on their runtime.
            </Typography>
          </li>
          <li>
            <Typography>
              CSE599G1: Deep Learning Systems - A survey class of neural network
              implementation and applications. Topics include: optimization -
              stochastic gradient descent, adaptive and 2nd order methods,
              normalization; convolutional neural networks - image processing,
              classification, detection, segmentation; recurrent neural networks
              - semantic understanding, translation, question-answering;
              cross-domain applications - image captioning, vision and language.
              Coursework involves the implementation of a neural network library
              in C and the use of PyTorch for higher level model training and
              evaluation.
            </Typography>
          </li>
          <li>
            <Typography>
              CSE344: Introduction to Data Management - ntroduces database
              management systems and writing applications that use such systems;
              data models (e.g., relational, semi-structured), query languages
              (e.g., SQL, XQuery), language bindings, conceptual modeling,
              transactions, security, database tuning, data warehousing,
              parallelism, and web-data management. Coursework mainly involves
              the use of SQL and mock scenarios to explore common query problems
              and their solutions.
            </Typography>
          </li>
          <li>
            <Typography>
              CSE546: Machine Learning - Methods for designing systems that
              learn from data and improve with experience. Supervised learning
              and predictive modeling: decision trees, rule induction, nearest
              neighbors, Bayesian methods, neural networks, support vector
              machines, and model ensembles. Unsupervised learning and
              clustering. This is widely considered the hardest CS class at UW;
              homework includes everything from linear algebra proofs and
              probability to neural network training and evaluation. CSE546 is
              the grad offering of CSE446 and includes additional homework with
              advanced theory and programming problems.
            </Typography>
          </li>
          <li>
            <Typography>
              CSE333: Systems Programming - Includes substantial programming
              experience in languages that expose machine characteristics and
              low-level data representation (e.g., C and C++); explicit memory
              management; interacting with operating-system services; and
              cache-aware programming. Coursework is based around the
              implementation of an inverted index and search engine for a
              filesystem.
            </Typography>
          </li>
          <li>
            <Typography>
              CSE473: Introduction to Artificial Intelligence - Principal ideas
              and developments in artificial intelligence: Problem solving and
              search, game playing, knowledge representation and reasoning,
              uncertainty. While this course touches on the use of neural
              networks for computer vision and NLP, it focuses on the
              reinforcement learning techniques that came before neural networks
              and sparked early development in AI.
            </Typography>
          </li>
          <li>
            <Typography>
              CSE312: Foundations of Computing II - Examines fundamentals of
              enumeration, discrete probability, and randomness. Surveys the
              applications of these topics to computing. Coursework is
              theory-focused, with typical homeworks consisting of writing
              proofs to problem sets and implementing short algorithms in Python
              that highlight the power of randomization.
            </Typography>
          </li>
          <li>
            <Typography>
              CSE331: Software Design and Implementation - Explores concepts and
              techniques for design and construction of reliable and
              maintainable software systems in modern high-level languages;
              program structure and design; program-correctness approaches,
              including testing; and event-driven programming (e.g., graphical
              user interface). Includes substantial project and software-team
              experience.
            </Typography>
          </li>
          <li>
            <Typography>
              CSE351: The Hardware/Software Interface - Examines key
              computational abstraction levels below modern high-level
              languages; number representation, assembly language, introduction
              to C, memory management, the operating-system process model,
              high-level machine architecture including the memory hierarchy,
              and how high-level languages are implemented. Coursework involves
              implementing algorithms such as cache-aware matrix multiplication,
              malloc and free, and buffer-overflow exploits to highlight the
              structure of the call stack.
            </Typography>
          </li>
          <li>
            <Typography>
              CSE391: System and Software Tools - Introduction to tools commonly
              used in software development. Topics include using a command-line
              interface, writing scripts for file and string manipulation,
              managing user permissions, manipulating text with regular
              expressions, using build-management tools, and using
              version-control systems. This is a one-credit course that's just
              designed to get students more familiar with the basic tools of a
              programmer.
            </Typography>
          </li>
          <li>
            <Typography>
              CSE332: Data Structures and Parallelism - Covers abstract data
              types and structures including dictionaries, balanced trees, hash
              tables, priority queues, and graphs; sorting; asymptotic analysis;
              fundamental graph algorithms including graph search, shortest
              path, and minimum spanning trees; concurrency and synchronization;
              and parallelism. Coursework is focused on the implementation of
              common data structures such as search trees and hash tables.
            </Typography>
          </li>
          <li>
            <Typography>
              CSE311: Foundations of Computing I - Examines fundamentals of
              logic, set theory, induction, and algebraic structures with
              applications to computing; finite state machines; and limits of
              computability. Coursework is theory-focused, with typical
              homeworks consisting of writing proofs to problem sets.
            </Typography>
          </li>
          <li>
            <Typography>
              CSE143: Computer Programming II- Concepts of data abstraction and
              encapsulation including stacks, queues, linked lists, binary
              trees, recursion, instruction to complexity and use of predefined
              collection classes. Programming assignments differ significantly
              from Computer Programming I in that they avoid the creation of a
              main routine, instead involving the use of lecture topics to
              implement objects that adhere to a specification.
            </Typography>
          </li>
        </ul>

        <Typography variant="h4">Physics</Typography>
        <ul style={{ display: "grid", gap: "10px" }}>
          <li>
            <Typography>
              PHYS335: Digital Electronics Laboratory - Principles of digital
              electronics: switching circuits, logic gates and sequential logic,
              memory, analog/digital conversion, microprocessor operation and
              programming. Coursework is lab-based and involves the construction
              of digital systems using a PIC microcontroller and circuit
              components.
            </Typography>
          </li>
          <li>
            <Typography>
              PHYS334: Analog Electronics Laboratory - Basic elements of DC, AC,
              and transient circuits; electronic devices; electrical
              measurements. Coursework is lab-based and involves the
              construction and analysis of analogic circuits. Includes
              significant experience with lab tools such as oscilloscopes and
              function generators.
            </Typography>
          </li>
          <li>
            <Typography>
              PHYS225: Introduction to Quantum Mechanics - Emphasizes two-state
              systems. Introduces spin and applications in nuclear magnetic
              resonance. Coursework mainly focuses on the use of mathematical
              frameworks such as bra-ket notation and linear algebra to
              determine outcomes in quantum systems.
            </Typography>
          </li>
          <li>
            <Typography>
              PHYS231: Introductory Experimental Physics - Introduction to data
              acquisition and analysis using experiments which measure
              fundamental constants or properties of nature (Planck's constant,
              Boltzmann's constant, speed of light, charge of electron)
            </Typography>
          </li>
          <li>
            <Typography>
              PHYS224: Introduces heat, thermodynamics, elementary kinetic
              theory, and statistical physics. Coursework focuses on the use of
              statistics and probability to prove facts about entropy and its
              relation to energy and temperature in various systems.
            </Typography>
          </li>
          <li>
            <Typography>
              PHYS123: Waves, Light and Heat - Explores oscillatory motion,
              electromagnetic waves, optics, waves in matter, fluids,
              thermodynamics, and related experiments.
            </Typography>
          </li>
          <li>
            <Typography>
              PHYS122: Covers the basic principles of electromagnetism, starting
              with Coulumb's law and ending with a simplified presentation of
              some of Maxwell's equations. Includes fundamentals of electric
              circuits and a discussion of the relationship between
              electromagnetism and special relativity.
            </Typography>
          </li>
          <li>
            <Typography>
              PHYS121: Mechanics - Covers the basics of Newtonian mechanics,
              including one dimensional motion, momentum, energy, motion in two
              or more dimensions, rotational motion, and gravity.
            </Typography>
          </li>
          <li>
            <Typography>
              MATH308: Matrix Algebra with Applications - Systems of linear
              equations, vector spaces, matrices, subspaces, orthogonality,
              least squares, eigenvalues, eigenvectors, applications.
            </Typography>
          </li>
          <li>
            <Typography>
              MATH126: Calculus with Analytic Geometry III - Third quarter in
              calculus sequence. Introduction to Taylor polynomials and Taylor
              series, vector geometry in three dimensions, introduction to
              multivariable differential calculus, double integrals in Cartesian
              and polar coordinates.
            </Typography>
          </li>
        </ul>
      </PaperWrapper>
    </Stack>
  );
};
export default Coursework;
