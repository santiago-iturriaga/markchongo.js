# Introduction

This website contains the work performed as part of the master's thesis in computer science (MSc) of [Santiago Iturriaga](http://www.fing.edu.uy/~siturria).

My thesis' files can be found here:
* [PDF document](http://www.fing.edu.uy/inco/grupos/cecal/hpc/MScIturriaga/MSc-Iturriaga.pdf)
* [Bibtex bibliography](http://www.fing.edu.uy/inco/grupos/cecal/hpc/MScIturriaga/MSc-Iturriaga-bibliography.bib)
* [LaTeX template](http://www.fing.edu.uy/inco/grupos/cecal/hpc/MScIturriaga/MSc-Iturriaga-latex.zip)
* [Presentation slides](http://www.fing.edu.uy/inco/grupos/cecal/hpc/MScIturriaga/MSc-Iturriaga-presentation.pdf)

# Abstract

In the last decade, the grid computing systems emerged as useful provider of the computing power required for solving complex problems. The classic formulation of the scheduling problem in heterogeneous computing systems is NP-hard, thus approximation techniques are required for solving real-world scenarios of this problem. This thesis tackles the problem of scheduling tasks in a heterogeneous computing environment in reduced execution times, considering the schedule length and the total energy consumption as the optimization objectives.

An efficient multithreading local search algorithm for solving the multi-objective scheduling problem in heterogeneous computing systems, named ME-MLS, is presented. The proposed method follows a fully multi-objective approach, applying a Pareto-based dominance search that is executed in parallel by using several threads. The experimental analysis demonstrates that the new multithreading algorithm outperforms a set of fast and accurate two-phase deterministic heuristics based on the traditional MinMin. The new ME-MLS method is able to achieve significant improvements in both makespan and energy consumption objectives in reduced execution times for a large set of testbed instances, while exhibiting very good scalability. The ME-MLS was evaluated solving instances comprised of up to 2048 tasks and 64 machines.

In order to scale the dimension of the problem instances even further and tackle large-sized problem instances, the Graphical Processing Unit (GPU) architecture is considered. This line of future work has been initially tackled with the gPALS: a hybrid CPU/GPU local search algorithm for efficiently tackling a single-objective heterogeneous computing scheduling problem. The gPALS shows very promising results, being able to tackle instances of up to 32768 tasks and 1024 machines in reasonable execution times.

# Related publications
* S. Iturriaga, S. Nesmachnow, and B. Dorronsoro. A Multithreading Local Search For Multiobjective Energy-Aware Scheduling In Heterogeneous Computing Systems. In Proceedings of the 26th European Conference on Modelling and Simulation (ECMS), pages 497-503, Koblenz, Germany, 2012a. ISBN 978-0-9564944-4-3
* S. Iturriaga, S. Nesmachnow, F. Luna, and E. Alba. A parallel online GPU scheduler for large heterogeneous computing systems. In Proceedings of the 5th High-Performance Computing Latin America Symposium (HPCLatAm), JAIIO '12, Buenos Aires, Argentina, 2012b
* S. Iturriaga, S. Nesmachnow, and C. Tutté. Metaheuristics for multiobjective energy-aware scheduling in heterogeneous computing systems. In EU/Metaheuristics Meeting Workshop (EU/ME), Copenhaguen, Denmark, 2012c
* S. Iturriaga, S. Nesmachnow, B. Dorronsoro, and P. Bouvry. Energy efficient scheduling in heterogeneous systems with a parallel multiobjective local search. Computing and Informatics Journal (CAI), 2013a. Accepted on November 2012, to appear
* S. Iturriaga, S. Nesmachnow, F. Luna, and E. Alba. A parallel local search in CPU/GPU for scheduling independent tasks on large heterogeneous computing systems. Journal of Parallel and Distributed Computing (JPDC), 2013b. Submitted on January 2013, pending acceptance
* S. Iturriaga, P. Ruiz, S. Nesmachnow, B. Dorronsoro, and P. Bouvry. A Parallel Multi-objective Local Search for AEDB Protocol Tuning. In Proceedings of the 16th International Workshop on Nature Inspired Distributed Computing, in the 27th IEEE/ACM International Parallel & Distributed Processing Symposium, Boston, Massachusetts, USA, 2013c. Accepted on February 2013, to appear
