Plan na opis szczegółowy
Projekt:
 - współpraca ze studentem, którym może wspólnie realizować zadania, 
 - możliwość współpracy międzynarodowej
Grafika:
 - frakcjonowanie izotopowe?
 - procesy zachodzące w chmurach (przesycenie, lód, opad, ...)
 - Wynik Gedzelman Arnold plot
 - 

TODO: Classic source:
\begin{itemize}
\item Robert N. Clayton
\item Tyler B. Coplen
\end{itemize}
More practical:
\begin{itemize}
\item IAEA isotope hydrology references.
\end{itemize}
\subsection*{Foundations of isotope fractionation}
Must cite at least one of:

Harmon Craig

Craig Gordon

for the Craig–Gordon framework.
\subsection*{Atmospheric isotope review papers}
I would definitely cite:

\begin{itemize}
\item Jouzel Jean
\item David Noone
\item Yannick Risi
\end{itemize}
Especially Risi and Noone because they connect observations and models.

\subsection*{Isotope-enabled climate and LES modeling}
Important references:

\begin{itemize}
\item David Noone
\item Yannick Risi
\item Christiane Sturm
\end{itemize}
For LES specifically, reviewers will expect awareness of isotope-enabled cloud simulations.


\subsection*{Triple oxygen isotopes}
This is the literature area that can make the proposal look modern.

Key names:

\begin{itemize}
\item Jost V. Lavrič
\item Wolfram Meijer
\item Michaël Landais
\end{itemize}
Also search recent papers on:

\begin{itemize}
\item 17O-excess
\item triple oxygen isotope composition of atmospheric vapor
\item CRDS measurements of H217217​O
\end{itemize}
A reviewer will likely look for these references.


\subsection*{Entrainment and mixing}
You should connect the isotope problem to classical cloud-mixing literature.

Names reviewers recognize immediately:

\begin{itemize}
\item Raymond A. Shaw
\item Wojciech W. Grabowski
\item Bart Geerts
\end{itemize}
Even if the proposal is isotope-focused, anchoring it in mainstream cloud physics is important.




The developed model provides a practical tool for integrating aerosol–cloud
 interactions with stable-isotope fractionation analyses by combining particle-based
 microphysics modeling with isotopic tracers.
By constraining supersaturation and mixing during entrainment, modeling isotopic
 fractionation enables reconstruction of saturation conditions and cloud processes
 and could help distinguish between inhomogeneous and homogeneous mixing.


# Short description of the project:


The project aims to develop and validate a physically consistent, particle-based model of isotopic evolution in cloud systems in order to test whether stable water isotopologues can be used to achieve *isotopic closure*, i.e. the reconstruction of cloud microphysical history from observed isotopic composition.

The approach integrates three components: (i) a theoretical framework describing isotopic fractionation in vapour, liquid, and ice phases, (ii) a numerical implementation within a particle-based cloud microphysics model (PySDM) extended to mixed-phase and multi-isotope processes, and (iii) validation against observational and experimental datasets, including aircraft measurements from the CAESAR campaign and laboratory cloud chamber experiments.

A key element of the model is a dimensionless representation of isotopic equilibration based on the Bolin number, which captures the relative timescales of isotopic adjustment and organizes fractionation behaviour across regimes of cloud evolution.

The project combines recent advances in isotope-enabled cloud modelling with high-resolution Lagrangian microphysics to provide a new framework for investigating supersaturation, entrainment, and phase transitions in clouds. The results will be used to assess the limits of isotope-based cloud diagnostics and to determine whether isotopic observations can robustly constrain cloud microphysical processes.


# International collaboration
## Description of advantages of international cooperation

The project benefits significantly from international cooperation with NSF NCAR (National Center for Atmospheric Research), in particular through collaboration with Dr. Elise Rosky, whose research focuses on cloud microphysics, mixed-phase cloud processes, and isotopic measurements in both laboratory and field settings. This collaboration provides direct access to complementary expertise in cloud observations and experimental design, which is essential for the validation component of the proposed isotopic modelling framework.

A key advantage of this cooperation is the possibility of direct comparison between the developed particle-based isotope-resolving model and high-quality observational datasets. These include measurements from the CAESAR aircraft campaign as well as data from controlled cloud chamber experiments investigating isotopic fractionation in vapour–liquid–ice systems. The availability of such datasets enables a rigorous, multi-platform validation of model performance under both natural atmospheric conditions and controlled laboratory environments.

The collaboration is particularly important for extending the model to mixed-phase cloud processes. Planned laboratory experiments at NSF NCAR will explicitly investigate isotopic fractionation in systems involving simultaneous vapour, liquid water, and ice. The proposed model will be adapted and used as an analysis tool for interpreting these experiments, enabling a two-way interaction between modelling and experimental design. This creates a feedback loop in which model predictions can inform experimental configurations, while laboratory results provide constraints for model development.

An additional advantage of the cooperation is the opportunity to test and refine the physical assumptions underlying isotopic fractionation parameterisations in complex cloud environments. This includes processes such as deposition, sublimation, and phase partitioning of isotopologues, which are difficult to constrain from field observations alone. The collaboration therefore strengthens the physical realism and robustness of the proposed modelling framework.

Beyond the immediate scientific objectives, the cooperation enhances the international visibility and impact of the project. It facilitates dissemination of results within the atmospheric science community and supports future joint publications and research initiatives. It also provides a pathway for integrating the developed methodology into broader international efforts in cloud microphysics and isotope-enabled modelling.

Overall, the collaboration with NSF NCAR significantly increases the scientific value of the project by enabling direct model–data integration, access to unique experimental capabilities, and active participation in ongoing and planned measurement campaigns.



# Abstract
The project aims to determine whether the stable isotopic composition of atmospheric water can be used to reconstruct the microphysical history of clouds, including phase transitions, mixing processes, and precipitation formation. The central scientific problem is the limited observational constraint on cloud microphysics, especially in mixed-phase clouds where liquid droplets and ice particles coexist and interact through complex, poorly understood processes. The project addresses this by testing the concept of isotopic closure, defined as the extent to which cloud processes can be inferred from isotopic observations within a physically consistent model framework.
The main research question is whether isotopic measurements of vapour, liquid water, and ice provide sufficient information to constrain cloud microphysical evolution. This is divided into three sub-questions: whether isotopic signals uniquely reflect cloud pathways under different atmospheric conditions, how kinetic effects and phase transitions limit this information content, and whether a unified dimensionless representation of isotopic equilibration can describe fractionation across regimes. The working hypothesis is that isotopic closure is achievable in warm clouds but breaks down in mixed-phase conditions unless ice-phase fractionation and kinetic limitations are explicitly represented.
The project is significant because current cloud and isotope modelling approaches do not consistently couple particle-level microphysics with isotopic evolution in mixed-phase systems. Existing models are typically bulk or Eulerian and cannot resolve stochastic droplet and ice particle evolution. As a result, key processes such as entrainment, supersaturation fluctuations, and ice deposition kinetics remain insufficiently constrained. Introducing isotopic tracers directly into a particle-based cloud microphysics framework enables a new way to test the predictive value of isotopes in atmospheric clouds.
The research combines theoretical development, numerical modelling, and observational evaluation. A new formulation of isotopic fractionation based on a dimensionless equilibration timescale is developed and implemented in the Super-Droplet Method, a Lagrangian particle-based cloud model. The model is extended to include vapour, liquid, and ice isotopologues and their interactions during condensation, evaporation, deposition, sublimation, and freezing. This enables fully prognostic simulation of isotopic evolution at particle level.
The model is evaluated using laboratory chamber experiments and aircraft observations from field campaigns. Performance is assessed using trajectory-based simulations and statistical diagnostics of isotopic composition, including bias, variability, and correlation structure. Sensitivity and uncertainty analyses identify which microphysical parameters control isotopic signals and under which conditions isotopic closure holds or fails.
The project consists of three work packages. The first develops a theoretical framework for isotopic fractionation in mixed-phase clouds, ensuring consistency with physical conservation laws and known limiting cases. The second implements this framework in a particle-based numerical model and extends it to mixed-phase processes. The third validates the model using observational and experimental datasets, combining forward simulations with systematic comparison to measured isotopic fields.
The project is carried out by a PhD researcher with experience in numerical modelling and scientific computing, under supervision of an expert in particle-based cloud microphysics. A student assistant supports software development and testing of simplified model configurations. The project integrates atmospheric physics, computational modelling, and data analysis to improve understanding of cloud microphysics and the interpretation of stable water isotope observations.



# Tasks
Research Tasks
Task 1: Development of a theoretical framework for isotopic fractionation in mixed-phase clouds
The objective of this task is to formulate a physically consistent description of isotopic fractionation processes in atmospheric clouds, with particular emphasis on mixed-phase conditions. The work will extend existing theories of equilibrium and kinetic isotope effects by incorporating a unified dimensionless representation of isotopic equilibration. This includes analysis of vapour–liquid and vapour–ice transitions, identification of limiting cases, and formulation of governing relationships that remain consistent with conservation laws and thermodynamic constraints. The outcome of this task will be a complete theoretical basis for implementation in a particle-based numerical model.
Task 2: Extension of particle-based cloud microphysics model to isotopic tracers
This task focuses on implementing the theoretical framework within the Super-Droplet Method (SDM), a Lagrangian particle-based cloud microphysics model. The existing SDM framework will be extended to include prognostic tracking of multiple water isotopologues across vapour, liquid, and ice phases. Microphysical processes such as condensation, evaporation, deposition, sublimation, and freezing will be coupled with isotopic mass exchange. Numerical consistency, conservation properties, and stability of the extended model will be systematically tested. The result will be a fully functional isotope-enabled cloud microphysics model capable of simulating particle-resolved isotopic evolution.
Task 3: Design and execution of controlled numerical experiments
The aim of this task is to investigate the behaviour of isotopic signals under controlled and idealised atmospheric conditions. A set of numerical experiments will be designed to isolate key microphysical processes influencing isotopic evolution, including supersaturation, temperature variability, droplet size distribution, and ice fraction. These experiments will be used to identify regimes of isotopic equilibration and non-equilibration and to test the validity of the dimensionless isotopic framework. The output will be a systematic dataset of simulated cloud and isotope evolution scenarios used for subsequent analysis.
Task 4: Analysis of isotopic closure in model simulations
This task will evaluate the extent to which cloud microphysical history can be reconstructed from isotopic composition, i.e. isotopic closure. Using simulation outputs, the relationship between microphysical pathways and isotopic signatures will be quantified. Both forward analysis (predicting isotopic composition from known conditions) and inverse analysis (inferring microphysical properties from isotopic signals) will be performed. Information content and identifiability of key cloud processes will be assessed using statistical diagnostics and uncertainty quantification methods. This task directly tests the central hypothesis of the project.
Task 5: Model validation using observational and experimental data
The extended model will be evaluated against observational datasets from aircraft campaigns and laboratory cloud chamber experiments. Simulated isotopic fields will be compared with measured vapour, cloud water, and ice isotopic composition using trajectory-based and ensemble methods. Model performance will be assessed in terms of bias, variability, and structural agreement with observed isotopic evolution. Discrepancies will be analysed to identify missing physical processes or parameterisation deficiencies.
Task 6: Sensitivity analysis and uncertainty quantification
This task will quantify the dependence of isotopic signals on key microphysical and environmental parameters. Systematic sensitivity experiments will be conducted to determine the influence of temperature, humidity, aerosol properties, droplet spectra, and ice fraction. Ensemble simulations will be used to propagate parameter uncertainty and assess robustness of isotopic closure results. Where appropriate, information-theoretic or statistical measures will be used to quantify predictive skill and uncertainty reduction.



