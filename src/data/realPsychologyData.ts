import { PsychologyTopic, Quiz } from '../types/psychology'

export const realPsychologyTopics: PsychologyTopic[] = [
  {
    id: 'classical-conditioning',
    title: 'Classical Conditioning',
    field: 'behavioral',
    difficulty: 'introductory',
    contentType: 'theory',
    timePeriod: 'classical',
    readingTime: 12,
    description: 'Ivan Pavlov\'s groundbreaking discovery of associative learning through stimulus-response relationships.',
    content: `# Classical Conditioning: The Foundation of Behavioral Learning

## Introduction

Classical conditioning, discovered by Russian physiologist Ivan Pavlov (1849-1936), represents one of the most fundamental forms of learning in psychology. This process involves creating associations between environmental stimuli and automatic responses, forming the basis for much of our understanding about how organisms learn and adapt to their environment.

## Historical Background

Pavlov's discovery was serendipitous. While studying digestive processes in dogs during the 1890s, he noticed that dogs began salivating not only when food was presented, but also when they heard the footsteps of the person who regularly fed them. This observation led to decades of systematic research that would revolutionize our understanding of learning.

## Key Components

### Unconditioned Stimulus (UCS)
The unconditioned stimulus is a naturally occurring stimulus that automatically triggers a response without prior learning. In Pavlov's experiments, food powder served as the UCS because it naturally caused dogs to salivate.

### Unconditioned Response (UCR)
The unconditioned response is the natural, automatic reaction to the unconditioned stimulus. Salivation in response to food is an UCR - it occurs without any learning or conditioning.

### Conditioned Stimulus (CS)
The conditioned stimulus is a previously neutral stimulus that, after being associated with the unconditioned stimulus, triggers a conditioned response. Pavlov used a bell as the CS, which initially meant nothing to the dogs.

### Conditioned Response (CR)
The conditioned response is the learned response to the conditioned stimulus. After conditioning, dogs would salivate when hearing the bell, even without food present.

## The Conditioning Process

### Acquisition
During acquisition, the neutral stimulus is repeatedly paired with the unconditioned stimulus. The strength of the conditioned response typically increases with each pairing, following a negatively accelerated curve - rapid initial learning that gradually levels off.

### Extinction
When the conditioned stimulus is repeatedly presented without the unconditioned stimulus, the conditioned response gradually weakens and eventually disappears. However, this doesn't mean the association is completely erased.

### Spontaneous Recovery
After extinction, if time passes and the conditioned stimulus is presented again, the conditioned response may reappear, though usually weaker than before. This demonstrates that extinction involves new learning rather than erasure of the original association.

### Generalization
Organisms tend to respond to stimuli similar to the original conditioned stimulus. For example, if a dog is conditioned to salivate to a 1000 Hz tone, it may also salivate to tones of 900 Hz or 1100 Hz, though the response will be weaker.

### Discrimination
Through differential conditioning, organisms can learn to respond to one stimulus but not to similar stimuli. This involves reinforcing responses to one stimulus while not reinforcing responses to others.

## Real-World Applications

### Phobia Development
Many phobias develop through classical conditioning. John B. Watson's famous "Little Albert" experiment (1920) demonstrated how a child could be conditioned to fear a white rat by pairing it with a loud, frightening noise.

### Advertising and Marketing
Advertisers frequently use classical conditioning principles by pairing their products (neutral stimuli) with positive images, music, or celebrities (unconditioned stimuli) to create positive associations.

### Medical Treatments
Classical conditioning explains why patients may feel nauseous when entering a chemotherapy clinic, as the environment becomes associated with the treatment's side effects.

### Taste Aversions
Garcia and Koelling's research on taste aversions showed that organisms can develop strong aversions to foods that made them sick, even if the illness occurred hours later. This has important implications for understanding eating disorders and food preferences.

## Higher-Order Conditioning

Once a conditioned stimulus is established, it can serve as an unconditioned stimulus for further conditioning. For example, if a light is paired with Pavlov's bell (which already elicits salivation), the light alone may eventually cause salivation.

## Biological Constraints

Not all stimuli can be equally easily conditioned with all responses. Biological preparedness suggests that organisms are genetically predisposed to form certain associations more easily than others. For instance, it's easier to condition fear responses to snakes or spiders than to flowers or butterflies.

## Contemporary Research

Modern neuroscience has identified the neural mechanisms underlying classical conditioning. The amygdala plays a crucial role in fear conditioning, while the cerebellum is important for eyeblink conditioning. These findings bridge the gap between behavioral observations and biological mechanisms.

## Clinical Applications

### Systematic Desensitization
This therapeutic technique uses classical conditioning principles to treat phobias by gradually exposing patients to feared stimuli while they're in a relaxed state.

### Aversion Therapy
Sometimes used to treat addictions, this approach pairs the addictive substance with an unpleasant stimulus to create negative associations.

## Conclusion

Classical conditioning remains one of psychology's most robust and well-documented phenomena. Its principles continue to inform our understanding of learning, memory, emotion, and behavior across species. From explaining how we develop preferences and aversions to informing therapeutic interventions, classical conditioning provides a fundamental framework for understanding how experience shapes behavior.

The elegance of Pavlov's discovery lies not just in its simplicity, but in its profound implications for understanding the adaptive nature of learning. By forming associations between environmental cues and significant events, organisms can anticipate and prepare for future occurrences, enhancing their survival and well-being.`,
    tags: ['learning', 'behaviorism', 'pavlov', 'conditioning', 'stimulus-response'],
    lastUpdated: '2024-01-15',
    author: 'Dr. Sarah Chen, Behavioral Psychology',
    citations: [
      'Pavlov, I. P. (1927). Conditioned reflexes. Oxford University Press.',
      'Watson, J. B., & Rayner, R. (1920). Conditioned emotional reactions. Journal of Experimental Psychology, 3(1), 1-14.',
      'Garcia, J., & Koelling, R. A. (1966). Relation of cue to consequence in avoidance learning. Psychonomic Science, 4(1), 123-124.'
    ],
    isBookmarked: false,
    progress: 'not-started' as const,
    relatedTopics: ['cognitive-dissonance', 'working-memory-model']
  },
  {
    id: 'cognitive-dissonance',
    title: 'Cognitive Dissonance Theory',
    field: 'social',
    difficulty: 'intermediate',
    contentType: 'theory',
    timePeriod: 'modern',
    readingTime: 15,
    description: 'Leon Festinger\'s influential theory explaining the psychological discomfort from holding contradictory beliefs.',
    content: `# Cognitive Dissonance Theory: Understanding Mental Conflict

## Introduction

Cognitive dissonance theory, developed by Leon Festinger in 1957, is one of social psychology's most influential and enduring theories. It describes the psychological discomfort experienced when holding contradictory beliefs, values, or attitudes simultaneously, and the motivation to reduce this discomfort through various cognitive and behavioral strategies.

## Theoretical Foundation

### Core Premise
Festinger proposed that humans have an innate drive for cognitive consistency. When our cognitions (thoughts, beliefs, attitudes, or knowledge) are inconsistent with each other or with our behavior, we experience dissonance - an unpleasant psychological tension that motivates us to restore harmony.

### The Dissonance Ratio
The magnitude of dissonance depends on:
- **Importance**: How significant the conflicting cognitions are to the individual
- **Number**: How many inconsistent cognitions exist
- **Ratio**: The proportion of dissonant to consonant cognitions

## Types of Cognitive Dissonance

### Post-Decision Dissonance
After making a difficult choice between attractive alternatives, people experience dissonance because they must give up the positive aspects of the rejected option while accepting the negative aspects of the chosen option.

**Example**: After buying an expensive car, a person might experience dissonance about the financial burden while simultaneously wanting to feel good about their purchase.

### Belief Disconfirmation
When strongly held beliefs are challenged by contradictory evidence, individuals experience dissonance between their existing beliefs and new information.

**Classic Study**: Festinger's "When Prophecy Fails" (1956) studied a UFO cult whose predicted apocalypse didn't occur, documenting how members dealt with this disconfirmation.

### Effort Justification
When people exert significant effort to achieve a goal, they experience dissonance if the outcome doesn't justify the effort invested.

**Research Example**: Aronson and Mills (1959) found that people who underwent severe initiation to join a group rated the group more favorably than those with mild initiation.

### Induced Compliance
When people are induced to behave in ways that contradict their attitudes, they experience dissonance between their behavior and beliefs.

**Festinger & Carlsmith Study (1959)**: Participants paid $1 to lie about a boring task later rated it as more enjoyable than those paid $20, demonstrating insufficient justification leading to attitude change.

## Dissonance Reduction Strategies

### Changing Attitudes
The most direct way to reduce dissonance is to change one of the conflicting attitudes to align with the other.

### Changing Behavior
Sometimes it's easier to modify behavior to match existing attitudes rather than change deeply held beliefs.

### Adding Consonant Cognitions
People may seek out information that supports their position while avoiding contradictory information (confirmation bias).

### Reducing Importance
Minimizing the significance of the conflicting cognitions can reduce the overall dissonance experienced.

### Compartmentalization
Keeping conflicting cognitions separate and avoiding thinking about them simultaneously.

## Factors Affecting Dissonance

### Individual Differences
- **Need for Consistency**: Some people have a stronger drive for cognitive consistency
- **Self-Esteem**: Higher self-esteem individuals may experience less dissonance
- **Cultural Background**: Collectivistic cultures may show different dissonance patterns than individualistic ones

### Situational Factors
- **Choice**: Dissonance is stronger when people feel they freely chose their actions
- **Commitment**: Public commitments create stronger dissonance than private ones
- **Irreversibility**: Permanent decisions create more dissonance than reversible ones

## Applications and Implications

### Consumer Behavior
Marketers use dissonance theory to understand post-purchase behavior and develop strategies to reduce buyer's remorse through:
- Warranty programs
- Customer testimonials
- Follow-up communications reinforcing purchase decisions

### Health Behavior
Understanding dissonance helps explain why people continue unhealthy behaviors despite knowing the risks:
- Smokers may minimize health risks or emphasize stress-reduction benefits
- People may avoid health information that conflicts with their lifestyle choices

### Education and Persuasion
Effective persuasion often involves creating dissonance between current beliefs and desired outcomes, then providing a path to resolution.

### Therapy and Counseling
Therapists may use dissonance principles to help clients recognize inconsistencies between their values and behaviors, motivating positive change.

## Criticisms and Limitations

### Alternative Explanations
- **Self-Perception Theory**: Bem (1967) argued that people infer their attitudes from observing their own behavior
- **Impression Management**: Some effects may result from wanting to appear consistent to others rather than internal dissonance

### Cultural Considerations
Most dissonance research has been conducted in Western, individualistic cultures, raising questions about cross-cultural validity.

### Measurement Challenges
Dissonance is an internal state that's difficult to measure directly, leading to reliance on indirect behavioral and attitudinal measures.

## Contemporary Research

### Neuroscience of Dissonance
Brain imaging studies have identified neural correlates of dissonance, particularly in the anterior cingulate cortex and prefrontal regions associated with conflict monitoring and resolution.

### Social Media and Dissonance
Modern research examines how social media creates new contexts for dissonance, such as:
- Echo chambers that reduce exposure to dissonant information
- Public posting creating commitment and potential dissonance
- Information overload affecting dissonance processing

### Political Psychology
Dissonance theory helps explain political behavior, including:
- Partisan motivated reasoning
- Resistance to fact-checking
- Post-election attitude changes

## Practical Applications

### Organizational Behavior
Understanding dissonance helps managers:
- Improve decision-making processes
- Reduce post-decision regret
- Enhance employee commitment through participation

### Marketing and Advertising
Effective strategies include:
- Creating dissonance about current products/behaviors
- Providing easy resolution through product adoption
- Reducing post-purchase dissonance through support

### Personal Development
Individuals can use dissonance awareness to:
- Identify inconsistencies in their beliefs and behaviors
- Make more authentic choices
- Develop greater self-awareness

## Conclusion

Cognitive dissonance theory remains one of psychology's most practical and widely applicable theories. Its insights into human motivation, decision-making, and attitude change continue to inform research and practice across numerous domains. While the theory has evolved and faced challenges over the decades, its core insight - that humans are motivated to maintain cognitive consistency - remains a fundamental principle for understanding human behavior.

The theory's enduring relevance lies in its ability to explain seemingly irrational human behaviors and provide frameworks for positive change. Whether in therapy, education, marketing, or personal development, understanding cognitive dissonance offers valuable insights into the complex relationship between thoughts, feelings, and actions.`,
    tags: ['social psychology', 'attitudes', 'consistency', 'festinger', 'motivation'],
    lastUpdated: '2024-01-20',
    author: 'Dr. Michael Rodriguez, Social Psychology',
    citations: [
      'Festinger, L. (1957). A theory of cognitive dissonance. Stanford University Press.',
      'Festinger, L., & Carlsmith, J. M. (1959). Cognitive consequences of forced compliance. Journal of Abnormal and Social Psychology, 58(2), 203-210.',
      'Aronson, E., & Mills, J. (1959). The effect of severity of initiation on liking for a group. Journal of Abnormal and Social Psychology, 59(2), 177-181.'
    ],
    isBookmarked: false,
    progress: 'not-started' as const,
    relatedTopics: ['classical-conditioning', 'attachment-theory-bowlby']
  },
  {
    id: 'working-memory-model',
    title: 'Baddeley\'s Working Memory Model',
    field: 'cognitive',
    difficulty: 'advanced',
    contentType: 'theory',
    timePeriod: 'contemporary',
    readingTime: 18,
    description: 'Alan Baddeley\'s comprehensive model of working memory as an active system for temporary information processing.',
    content: `# Baddeley's Working Memory Model: The Architecture of Conscious Thought

## Introduction

Alan Baddeley's working memory model, first proposed in 1974 and continuously refined over decades, revolutionized our understanding of short-term memory. Rather than viewing short-term memory as a passive storage system, Baddeley conceptualized working memory as an active, multi-component system responsible for temporarily holding and manipulating information during cognitive tasks.

## Historical Context

### From Short-Term Memory to Working Memory
The traditional modal model of memory (Atkinson & Shiffrin, 1968) proposed a unitary short-term memory store. However, this model couldn't adequately explain several phenomena:
- Why people could perform two tasks simultaneously if they used different types of information
- The complexity of cognitive processes requiring temporary storage
- Individual differences in memory span and cognitive ability

### Baddeley and Hitch's Innovation
In 1974, Baddeley and Hitch proposed that short-term memory was actually a complex system of interacting components, each specialized for different types of information processing.

## The Four-Component Model

### 1. Central Executive

The central executive serves as the supervisory system of working memory, responsible for:

**Attentional Control**
- Focusing attention on relevant information
- Inhibiting irrelevant information
- Switching attention between tasks

**Coordination**
- Managing the flow of information between subsystems
- Coordinating multiple cognitive processes
- Integrating information from different sources

**Strategic Processing**
- Planning and decision-making
- Problem-solving strategies
- Monitoring and updating goals

**Capacity Limitations**
The central executive has limited capacity and can become overloaded when managing too many processes simultaneously.

### 2. Phonological Loop

The phonological loop processes verbal and acoustic information through two subcomponents:

**Phonological Store**
- Holds speech-based information for 1-2 seconds
- Information decays rapidly without rehearsal
- Capacity limited to what can be spoken in about 2 seconds

**Articulatory Rehearsal Process**
- Refreshes information in the phonological store through subvocal rehearsal
- Converts visual information into phonological code
- Can be disrupted by articulatory suppression (saying "the, the, the")

**Evidence for the Phonological Loop**
- **Word Length Effect**: Shorter words are recalled better than longer words
- **Phonological Similarity Effect**: Similar-sounding words are harder to remember
- **Articulatory Suppression**: Prevents rehearsal and reduces memory span

### 3. Visuospatial Sketchpad

The visuospatial sketchpad processes visual and spatial information:

**Visual Cache**
- Stores visual information about form, color, and texture
- Maintains static visual images
- Limited capacity for visual details

**Inner Scribe**
- Processes spatial and movement information
- Handles dynamic spatial sequences
- Involved in planning spatial movements

**Functions**
- Mental imagery and visualization
- Spatial navigation and orientation
- Visual problem-solving
- Integration of visual and spatial information

### 4. Episodic Buffer

Added to the model in 2000, the episodic buffer:

**Integration Function**
- Combines information from the phonological loop and visuospatial sketchpad
- Links working memory to long-term memory
- Creates coherent episodes from fragmented information

**Conscious Awareness**
- Provides the interface between working memory and consciousness
- Allows for complex cognitive operations requiring integration
- Supports narrative and autobiographical thinking

**Capacity and Control**
- Limited capacity (approximately 4 chunks of information)
- Controlled by the central executive
- Accessible to conscious awareness

## Neurobiological Basis

### Brain Networks
Modern neuroimaging has identified brain networks corresponding to working memory components:

**Central Executive**
- Prefrontal cortex (especially dorsolateral regions)
- Anterior cingulate cortex
- Parietal cortex

**Phonological Loop**
- Left hemisphere language areas
- Broca's area (articulatory rehearsal)
- Temporal regions (phonological storage)

**Visuospatial Sketchpad**
- Right hemisphere regions
- Occipital and parietal areas
- Frontal eye fields

### Individual Differences
Brain imaging reveals individual differences in:
- Activation patterns during working memory tasks
- Structural differences in relevant brain regions
- Efficiency of neural networks

## Developmental Perspectives

### Children's Working Memory
Working memory develops throughout childhood:
- **Capacity increases** with age
- **Processing efficiency** improves
- **Strategic use** becomes more sophisticated

### Educational Implications
Working memory limitations affect:
- Reading comprehension
- Mathematical problem-solving
- Following complex instructions
- Academic achievement generally

### Interventions
Training programs targeting working memory show:
- Improvements on trained tasks
- Limited transfer to untrained tasks
- Ongoing debate about real-world benefits

## Clinical Applications

### ADHD
Attention Deficit Hyperactivity Disorder involves:
- Central executive dysfunction
- Difficulty with attentional control
- Problems with working memory updating

### Alzheimer's Disease
Early stages show:
- Central executive impairment
- Preserved phonological loop function initially
- Progressive deterioration of all components

### Schizophrenia
Working memory deficits include:
- Reduced capacity across all components
- Particular problems with central executive function
- Correlation with functional outcomes

## Contemporary Research

### Dual N-Back Training
Research on working memory training using dual n-back tasks:
- Improvements in working memory capacity
- Potential transfer to fluid intelligence
- Ongoing debate about mechanisms and effectiveness

### Individual Differences
Modern research examines:
- Genetic influences on working memory
- Relationship to general intelligence
- Cultural and educational factors

### Technology and Working Memory
Digital age considerations:
- Impact of multitasking on working memory
- Cognitive load in digital environments
- Design principles for reducing working memory demands

## Practical Applications

### Education
Understanding working memory helps:
- Design effective instructional materials
- Reduce cognitive load in learning
- Support students with working memory difficulties
- Develop assessment strategies

### User Interface Design
Working memory principles inform:
- Information presentation
- Menu design and navigation
- Reducing cognitive burden
- Accessibility considerations

### Therapy and Rehabilitation
Clinical applications include:
- Cognitive rehabilitation programs
- Compensatory strategies for memory impairment
- Assessment of cognitive function
- Treatment planning

## Criticisms and Limitations

### Theoretical Challenges
- **Homunculus Problem**: Who controls the central executive?
- **Binding Problem**: How is information integrated across systems?
- **Capacity Debates**: What determines working memory limits?

### Empirical Issues
- **Task Impurity**: Working memory tasks involve multiple processes
- **Individual Differences**: Large variations in performance
- **Transfer Effects**: Limited generalization of training

### Alternative Models
- **Embedded Processes Model**: Working memory as activated long-term memory
- **Time-Based Resource Sharing**: Attention-based account of capacity limits
- **Neural Network Models**: Computational approaches to working memory

## Future Directions

### Emerging Technologies
- **Real-time fMRI**: Neurofeedback for working memory training
- **Virtual Reality**: Immersive working memory assessment and training
- **Mobile Apps**: Ecological momentary assessment of working memory

### Theoretical Developments
- Integration with theories of attention and consciousness
- Computational models of working memory
- Cross-cultural studies of working memory

### Clinical Advances
- Personalized interventions based on working memory profiles
- Early detection of cognitive decline
- Precision medicine approaches to cognitive enhancement

## Conclusion

Baddeley's working memory model has fundamentally changed our understanding of human cognition. By proposing a multi-component system rather than a unitary store, the model has provided a framework for understanding complex cognitive processes, individual differences, and clinical conditions.

The model's strength lies in its ability to integrate behavioral, neurobiological, and clinical evidence while remaining practical for real-world applications. As our understanding of the brain continues to evolve, the working memory model continues to be refined and expanded, demonstrating its enduring value as a theoretical framework.

From education to clinical practice, from user interface design to cognitive training, the working memory model provides essential insights into the architecture of human thought. Its continued evolution reflects the dynamic nature of scientific understanding and the ongoing quest to comprehend the remarkable complexity of the human mind.`,
    tags: ['memory', 'cognition', 'baddeley', 'information processing', 'executive function'],
    lastUpdated: '2024-01-25',
    author: 'Dr. Emma Thompson, Cognitive Psychology',
    citations: [
      'Baddeley, A., & Hitch, G. (1974). Working memory. Psychology of Learning and Motivation, 8, 47-89.',
      'Baddeley, A. (2000). The episodic buffer: A new component of working memory? Trends in Cognitive Sciences, 4(11), 417-423.',
      'Baddeley, A. (2012). Working memory: Theories, models, and controversies. Annual Review of Psychology, 63, 1-29.'
    ],
    isBookmarked: false,
    progress: 'not-started' as const,
    relatedTopics: ['classical-conditioning', 'dsm5-major-depression']
  },
  {
    id: 'attachment-theory-bowlby',
    title: 'Bowlby\'s Attachment Theory',
    field: 'developmental',
    difficulty: 'intermediate',
    contentType: 'theory',
    timePeriod: 'modern',
    readingTime: 16,
    description: 'John Bowlby\'s revolutionary theory on the importance of early emotional bonds for human development.',
    content: `# Bowlby's Attachment Theory: The Foundation of Human Relationships

## Introduction

John Bowlby's attachment theory, developed in the 1960s and 1970s, revolutionized our understanding of early human development and the formation of emotional bonds. This theory proposes that the quality of early relationships between infants and their primary caregivers has profound and lasting effects on social, emotional, and cognitive development throughout life.

## Historical Background

### Bowlby's Journey
John Bowlby (1907-1990), a British psychoanalyst and psychiatrist, was influenced by:
- **Psychoanalytic Theory**: Freudian concepts of early experience importance
- **Ethology**: Konrad Lorenz's work on imprinting in animals
- **Evolutionary Biology**: Darwin's ideas about survival and adaptation
- **Clinical Observations**: Work with delinquent and emotionally disturbed children

### Departure from Psychoanalysis
Bowlby challenged traditional psychoanalytic views by:
- Emphasizing real relationships over fantasy
- Focusing on observable behaviors rather than unconscious drives
- Incorporating scientific methodology and empirical research
- Proposing evolutionary rather than purely psychological explanations

## Core Principles of Attachment Theory

### 1. Innate Behavioral System
Attachment is an innate behavioral system that:
- **Promotes Survival**: Keeps infants close to protective caregivers
- **Is Universal**: Found across cultures and species
- **Is Adaptive**: Evolved to enhance survival chances
- **Activates Under Threat**: Triggered by danger, separation, or distress

### 2. Internal Working Models
Children develop internal working models that include:
- **Self-Concept**: Am I worthy of love and care?
- **Other-Concept**: Are others reliable and responsive?
- **Relationship Expectations**: How do relationships typically function?
- **Emotional Regulation**: How to manage feelings and seek comfort

### 3. Secure Base Behavior
A responsive caregiver provides:
- **Safe Haven**: Comfort and protection during distress
- **Secure Base**: Confidence to explore the environment
- **Emotional Regulation**: Help managing overwhelming emotions
- **Co-regulation**: Shared emotional experiences that build capacity

## The Attachment Behavioral System

### Attachment Behaviors
Infants use various behaviors to maintain proximity to caregivers:

**Signaling Behaviors**
- Crying and fussing
- Smiling and vocalizing
- Eye contact and facial expressions

**Aversive Behaviors**
- Clinging and following
- Reaching and grasping
- Protest when separated

**Locomotor Behaviors**
- Crawling or walking toward caregiver
- Seeking physical contact
- Staying within safe distance

### Caregiver Sensitivity
Responsive caregiving involves:
- **Awareness**: Noticing infant signals
- **Interpretation**: Understanding what the infant needs
- **Appropriate Response**: Meeting needs promptly and effectively
- **Consistency**: Reliable patterns of responsiveness

## Attachment Styles

### Secure Attachment (60-65% of children)
**Characteristics**:
- Comfortable with intimacy and autonomy
- Effective emotion regulation
- Positive view of self and others
- Resilient in face of stress

**Caregiver Behavior**:
- Consistently responsive and sensitive
- Emotionally available and attuned
- Provides comfort during distress
- Encourages exploration and independence

### Insecure-Avoidant Attachment (20-25%)
**Characteristics**:
- Discomfort with closeness
- Self-reliant and emotionally distant
- Difficulty expressing emotions
- May appear independent but lacks emotional support

**Caregiver Behavior**:
- Consistently unresponsive or rejecting
- Uncomfortable with emotional expression
- Values independence over connection
- May be emotionally unavailable

### Insecure-Resistant/Ambivalent Attachment (10-15%)
**Characteristics**:
- Anxious about relationships
- Seeks closeness but fears abandonment
- Difficulty with emotion regulation
- May be clingy or demanding

**Caregiver Behavior**:
- Inconsistently responsive
- Sometimes available, sometimes not
- May be overwhelmed by own emotions
- Unpredictable in meeting child's needs

### Disorganized Attachment (5-10%)
**Characteristics**:
- Contradictory behaviors toward caregiver
- Difficulty with emotion regulation
- May show fear of caregiver
- Associated with trauma or loss

**Caregiver Behavior**:
- Frightening or frightened behavior
- May have unresolved trauma or loss
- Inconsistent and unpredictable responses
- May be source of both comfort and fear

## The Strange Situation Procedure

### Mary Ainsworth's Contribution
Mary Ainsworth, Bowlby's colleague, developed the Strange Situation procedure to assess attachment styles:

**Procedure Steps**:
1. Mother and infant enter unfamiliar room
2. Infant explores while mother is present
3. Stranger enters and talks to mother
4. Mother leaves infant with stranger
5. Mother returns, stranger leaves
6. Mother leaves infant completely alone
7. Stranger returns
8. Mother returns, stranger leaves

**Assessment Criteria**:
- Separation anxiety
- Stranger anxiety
- Reunion behavior
- Exploration patterns

## Neurobiological Foundations

### Brain Development
Attachment experiences influence:
- **Stress Response Systems**: HPA axis development
- **Neural Pathways**: Formation of emotional regulation circuits
- **Neurotransmitter Systems**: Oxytocin, dopamine, and serotonin
- **Brain Structure**: Development of prefrontal cortex and limbic system

### Epigenetic Effects
Early attachment experiences can:
- Influence gene expression
- Affect stress sensitivity
- Impact immune system functioning
- Alter neuroplasticity

## Lifespan Development

### Childhood
Attachment patterns influence:
- **Peer Relationships**: Social skills and friendship quality
- **Academic Performance**: Ability to focus and learn
- **Emotional Development**: Self-regulation and empathy
- **Behavioral Problems**: Risk for aggression or withdrawal

### Adolescence
Attachment affects:
- **Identity Formation**: Sense of self and autonomy
- **Romantic Relationships**: Dating and intimacy patterns
- **Risk-Taking**: Decision-making and peer influence
- **Mental Health**: Depression and anxiety risks

### Adulthood
Adult attachment patterns influence:
- **Romantic Relationships**: Partner selection and relationship quality
- **Parenting**: Caregiving behaviors with own children
- **Work Relationships**: Professional interactions and leadership
- **Mental Health**: Resilience and psychological well-being

## Cultural Considerations

### Universal vs. Cultural Patterns
Research shows:
- **Universal Need**: All children need secure relationships
- **Cultural Variations**: Different expressions of caregiving
- **Collectivist vs. Individualist**: Varying emphasis on independence
- **Caregiving Practices**: Multiple caregivers vs. primary attachment figure

### Cross-Cultural Research
Studies across cultures reveal:
- Similar attachment patterns worldwide
- Cultural differences in attachment behaviors
- Varying rates of attachment styles
- Different meanings of sensitivity and responsiveness

## Clinical Applications

### Assessment
Attachment-based assessment includes:
- **Adult Attachment Interview**: Assessing adult attachment representations
- **Observational Methods**: Parent-child interaction coding
- **Self-Report Measures**: Attachment style questionnaires
- **Therapeutic Assessment**: Understanding relationship patterns

### Intervention
Attachment-based interventions focus on:
- **Enhancing Sensitivity**: Teaching responsive caregiving
- **Addressing Trauma**: Healing attachment injuries
- **Building Security**: Creating corrective relationship experiences
- **Family Therapy**: Improving family attachment relationships

### Therapeutic Approaches
- **Attachment-Based Therapy**: Direct application of attachment principles
- **Emotionally Focused Therapy**: For couples and families
- **Trauma-Informed Care**: Addressing attachment trauma
- **Parent-Child Interaction Therapy**: Improving early relationships

## Research Findings

### Longitudinal Studies
Major longitudinal studies have shown:
- **Minnesota Study**: 30+ year follow-up of attachment patterns
- **NICHD Study**: Large-scale study of childcare and attachment
- **Stability and Change**: Both continuity and change in attachment patterns
- **Predictive Validity**: Early attachment predicts later outcomes

### Meta-Analyses
Research syntheses reveal:
- Moderate stability of attachment across development
- Significant associations with social and emotional outcomes
- Cultural universality with some variation
- Effectiveness of attachment-based interventions

## Contemporary Developments

### Attachment in Digital Age
Modern considerations include:
- **Screen Time**: Impact on parent-child interaction
- **Social Media**: Effects on adolescent attachment
- **Digital Communication**: Maintaining attachment bonds
- **Technology-Mediated Relationships**: New forms of connection

### Neuroscience Integration
Current research examines:
- **Brain Imaging**: Neural correlates of attachment
- **Hormonal Studies**: Oxytocin and attachment bonding
- **Genetic Research**: Heritability of attachment patterns
- **Epigenetics**: Environmental influences on gene expression

### Attachment in Special Populations
Research with diverse populations:
- **Adoption**: Attachment formation in adoptive families
- **Foster Care**: Attachment disruption and repair
- **Autism**: Attachment in neurodevelopmental conditions
- **Premature Infants**: Early medical intervention effects

## Criticisms and Limitations

### Theoretical Criticisms
- **Determinism**: Overemphasis on early experience
- **Western Bias**: Cultural limitations of theory
- **Gender Issues**: Different patterns for mothers vs. fathers
- **Temperament**: Role of child characteristics

### Methodological Issues
- **Strange Situation**: Limitations of laboratory assessment
- **Observer Bias**: Subjective interpretation of behaviors
- **Stability**: Changes in attachment over time
- **Causality**: Difficulty establishing causal relationships

## Practical Applications

### Parenting
Attachment theory informs:
- **Responsive Parenting**: Meeting children's emotional needs
- **Discipline Strategies**: Connection before correction
- **Emotional Coaching**: Teaching emotion regulation
- **Building Security**: Creating safe and predictable environments

### Education
School applications include:
- **Teacher-Student Relationships**: Creating secure classroom environments
- **Social-Emotional Learning**: Building relationship skills
- **Trauma-Informed Schools**: Understanding attachment trauma
- **Peer Relationships**: Supporting healthy friendships

### Healthcare
Medical applications involve:
- **Pediatric Care**: Supporting parent-child bonds during illness
- **Mental Health**: Attachment-based therapy approaches
- **Trauma Treatment**: Addressing attachment injuries
- **Prevention Programs**: Early intervention for at-risk families

## Conclusion

Bowlby's attachment theory has fundamentally changed our understanding of human development and relationships. By recognizing the critical importance of early emotional bonds, the theory has influenced parenting practices, educational approaches, therapeutic interventions, and social policies worldwide.

The theory's strength lies in its integration of evolutionary, developmental, and clinical perspectives, providing a comprehensive framework for understanding human relationships across the lifespan. While the theory continues to evolve and face challenges, its core insights about the importance of secure relationships remain central to promoting healthy human development.

From the earliest moments of life through old age, attachment relationships shape who we are and how we relate to others. Understanding these patterns provides hope for healing, growth, and the creation of more secure and fulfilling relationships for individuals, families, and communities.`,
    tags: ['attachment', 'development', 'bowlby', 'relationships', 'early childhood'],
    lastUpdated: '2024-01-30',
    author: 'Dr. Lisa Park, Developmental Psychology',
    citations: [
      'Bowlby, J. (1969). Attachment and Loss: Vol. 1. Attachment. Basic Books.',
      'Ainsworth, M. D. S., Blehar, M. C., Waters, E., & Wall, S. (1978). Patterns of attachment: A psychological study of the strange situation. Erlbaum.',
      'Main, M., & Solomon, J. (1986). Discovery of an insecure-disorganized/disoriented attachment pattern. In T. B. Brazelton & M. W. Yogman (Eds.), Affective development in infancy (pp. 95-124). Ablex.'
    ],
    isBookmarked: false,
    progress: 'not-started' as const,
    relatedTopics: ['cognitive-dissonance', 'dsm5-major-depression']
  },
  {
    id: 'dsm5-major-depression',
    title: 'Major Depressive Disorder (DSM-5)',
    field: 'clinical',
    difficulty: 'advanced',
    contentType: 'disorder',
    timePeriod: 'contemporary',
    readingTime: 20,
    description: 'Comprehensive overview of Major Depressive Disorder according to DSM-5 criteria, including symptoms, diagnosis, and treatment.',
    content: `# Major Depressive Disorder: A Comprehensive Clinical Overview

## Introduction

Major Depressive Disorder (MDD) is one of the most prevalent and debilitating mental health conditions worldwide. According to the World Health Organization, depression affects over 280 million people globally and is a leading cause of disability. The Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition (DSM-5) provides the current standard for diagnosing and understanding this complex condition.

## DSM-5 Diagnostic Criteria

### Criterion A: Symptom Requirements
At least five of the following symptoms must be present during the same 2-week period, representing a change from previous functioning. At least one symptom must be either (1) depressed mood or (2) loss of interest or pleasure:

**1. Depressed Mood**
- Subjective report of feeling sad, empty, or hopeless
- Observable by others (appears tearful)
- In children and adolescents, may be irritable mood
- Present most of the day, nearly every day

**2. Anhedonia**
- Markedly diminished interest or pleasure in all or almost all activities
- Most of the day, nearly every day
- Subjective account or observation by others
- May include loss of libido

**3. Significant Weight Change**
- Weight loss when not dieting or weight gain
- Change of more than 5% of body weight in a month
- Decrease or increase in appetite nearly every day
- In children, failure to make expected weight gains

**4. Sleep Disturbances**
- Insomnia or hypersomnia nearly every day
- Early morning awakening (terminal insomnia)
- Difficulty falling asleep (initial insomnia)
- Frequent awakening (middle insomnia)
- Excessive sleeping

**5. Psychomotor Changes**
- Psychomotor agitation or retardation nearly every day
- Observable by others, not merely subjective restlessness
- Slowing of thought and reduction of physical movement
- Agitation may include inability to sit still, pacing, hand-wringing

**6. Fatigue or Loss of Energy**
- Nearly every day
- Even small tasks require substantial effort
- May report feeling tired without physical exertion
- Decreased efficiency in completing tasks

**7. Feelings of Worthlessness or Guilt**
- Excessive or inappropriate guilt
- May be delusional in severity
- Not merely self-reproach about being sick
- Feelings of worthlessness about past actions or current state

**8. Cognitive Impairment**
- Diminished ability to think or concentrate
- Indecisiveness nearly every day
- Subjective account or observed by others
- May affect work, school, or daily functioning

**9. Suicidal Ideation**
- Recurrent thoughts of death
- Recurrent suicidal ideation without specific plan
- Suicide attempt or specific plan for committing suicide
- Requires immediate clinical attention

### Criterion B: Functional Impairment
The symptoms cause clinically significant distress or impairment in:
- Social functioning
- Occupational functioning
- Other important areas of functioning

### Criterion C: Medical Exclusion
The episode is not attributable to:
- Physiological effects of a substance
- Another medical condition

### Criterion D: Differential Diagnosis
The occurrence is not better explained by:
- Schizophrenia spectrum disorders
- Other psychotic disorders
- Delusional disorder
- Schizophreniform disorder

### Criterion E: Manic/Hypomanic History
There has never been a manic episode or hypomanic episode (unless substance-induced or due to medical condition).

## Specifiers and Subtypes

### Severity Specifiers
**Mild**: Few symptoms in excess of minimum required, minor impairment
**Moderate**: Symptoms and impairment between mild and severe
**Severe**: Most symptoms present, marked impairment in functioning

### Course Specifiers
- **Single Episode**: First lifetime episode
- **Recurrent**: Two or more major depressive episodes separated by at least 2 months
- **In Partial Remission**: Some symptoms remain but full criteria not met
- **In Full Remission**: No significant symptoms for at least 2 months

### Additional Specifiers

**With Anxious Distress**
- Feeling keyed up or tense
- Feeling unusually restless
- Difficulty concentrating due to worry
- Fear that something awful may happen
- Feeling of losing control

**With Mixed Features**
- At least three manic/hypomanic symptoms during major depressive episode
- Elevated mood, grandiosity, flight of ideas
- Increased energy, decreased need for sleep
- Psychomotor agitation

**With Melancholic Features**
- Loss of pleasure in all activities
- Lack of mood reactivity
- Distinct quality of depressed mood
- Early morning awakening
- Psychomotor changes
- Significant anorexia or weight loss
- Excessive guilt

**With Atypical Features**
- Mood reactivity (brightens in response to positive events)
- Significant weight gain or increased appetite
- Hypersomnia
- Leaden paralysis (heavy feelings in arms or legs)
- Interpersonal rejection sensitivity

**With Psychotic Features**
- Delusions and/or hallucinations
- May be mood-congruent or mood-incongruent
- Requires specification of congruence with mood themes

**With Catatonia**
- Catatonic features during the major depressive episode
- Stupor, catalepsy, waxy flexibility
- Mutism, negativism, posturing
- Mannerisms, stereotypies, grimacing

**With Peripartum Onset**
- Onset during pregnancy or within 4 weeks postpartum
- May include psychotic features
- Risk factors include hormonal changes, sleep deprivation

**With Seasonal Pattern**
- Regular temporal relationship between onset and time of year
- Full remissions occur at characteristic times
- Seasonal episodes substantially outnumber non-seasonal episodes
- Most commonly fall/winter depression

## Epidemiology

### Prevalence
- **12-month prevalence**: 7% in 18-29 year-olds, 5% overall
- **Lifetime prevalence**: 10.8% in the United States
- **Gender differences**: Females 1.5-3 times higher risk than males
- **Age of onset**: Peak in 20s, but can occur at any age

### Risk Factors

**Biological Factors**
- Genetic predisposition (heritability ~40%)
- Neurotransmitter imbalances (serotonin, norepinephrine, dopamine)
- Hormonal changes (thyroid, reproductive hormones)
- Medical conditions (cardiovascular disease, diabetes, cancer)

**Psychological Factors**
- Negative cognitive patterns
- Low self-esteem
- Perfectionism
- Rumination and worry
- Poor coping strategies

**Social Factors**
- Stressful life events
- Social isolation
- Relationship problems
- Financial difficulties
- Work-related stress
- Childhood trauma or abuse

### Protective Factors
- Strong social support
- Regular exercise
- Healthy sleep patterns
- Effective coping strategies
- Spiritual or religious practices
- Access to mental health care

## Neurobiological Basis

### Neurotransmitter Systems

**Monoamine Hypothesis**
- Deficiency in serotonin, norepinephrine, and dopamine
- Basis for antidepressant medication development
- Oversimplified but clinically useful model

**GABA System**
- Reduced GABAergic inhibition
- Relationship to anxiety symptoms
- Target for some treatments

**Glutamate System**
- Excessive glutamate activity
- NMDA receptor involvement
- Novel treatment targets (ketamine)

### Brain Structure and Function

**Prefrontal Cortex**
- Reduced activity in dorsolateral regions
- Impaired executive function and decision-making
- Difficulty with emotion regulation

**Limbic System**
- Hyperactivity in amygdala
- Increased emotional reactivity
- Enhanced threat detection

**Hippocampus**
- Reduced volume in chronic depression
- Memory and learning impairments
- Stress-related neuroplasticity changes

**Default Mode Network**
- Increased rumination and self-focus
- Altered connectivity patterns
- Target for mindfulness interventions

### Stress Response System

**HPA Axis Dysfunction**
- Elevated cortisol levels
- Impaired stress recovery
- Chronic activation effects

**Inflammation**
- Increased pro-inflammatory cytokines
- Immune system dysregulation
- Bidirectional relationship with depression

## Assessment and Diagnosis

### Clinical Interview
- Comprehensive psychiatric history
- Medical history and current medications
- Substance use assessment
- Suicide risk evaluation
- Functional assessment
- Family history of mental illness

### Standardized Assessment Tools

**Clinician-Administered**
- Hamilton Depression Rating Scale (HAM-D)
- Montgomery-Åsberg Depression Rating Scale (MADRS)
- Structured Clinical Interview for DSM-5 (SCID-5)

**Self-Report Measures**
- Beck Depression Inventory-II (BDI-II)
- Patient Health Questionnaire-9 (PHQ-9)
- Center for Epidemiologic Studies Depression Scale (CES-D)
- Quick Inventory of Depressive Symptomatology (QIDS-SR)

### Differential Diagnosis

**Medical Conditions**
- Hypothyroidism
- Cushing's syndrome
- Parkinson's disease
- Multiple sclerosis
- Stroke
- Chronic fatigue syndrome

**Substance-Related**
- Alcohol use disorder
- Cannabis use disorder
- Stimulant withdrawal
- Medication side effects

**Other Mental Disorders**
- Bipolar disorder
- Persistent depressive disorder (dysthymia)
- Adjustment disorder with depressed mood
- Grief and bereavement
- Anxiety disorders
- Personality disorders

## Treatment Approaches

### Psychotherapy

**Cognitive Behavioral Therapy (CBT)**
- Identifying and changing negative thought patterns
- Behavioral activation and activity scheduling
- Problem-solving skills training
- Strong empirical support

**Interpersonal Therapy (IPT)**
- Focus on interpersonal relationships
- Grief, role disputes, role transitions, interpersonal deficits
- Time-limited and structured approach

**Psychodynamic Therapy**
- Exploring unconscious conflicts
- Insight-oriented approach
- Longer-term treatment

**Acceptance and Commitment Therapy (ACT)**
- Psychological flexibility
- Values-based action
- Mindfulness and acceptance strategies

**Mindfulness-Based Interventions**
- Mindfulness-Based Cognitive Therapy (MBCT)
- Mindfulness-Based Stress Reduction (MBSR)
- Preventing relapse and recurrence

### Pharmacotherapy

**Selective Serotonin Reuptake Inhibitors (SSRIs)**
- First-line treatment
- Fluoxetine, sertraline, paroxetine, citalopram, escitalopram
- Generally well-tolerated
- 4-6 weeks for full effect

**Serotonin-Norepinephrine Reuptake Inhibitors (SNRIs)**
- Venlafaxine, duloxetine, desvenlafaxine
- Effective for depression with pain symptoms
- May have higher discontinuation symptoms

**Atypical Antidepressants**
- Bupropion (dopamine/norepinephrine)
- Mirtazapine (alpha-2 antagonist)
- Trazodone (serotonin antagonist/reuptake inhibitor)

**Tricyclic Antidepressants (TCAs)**
- Amitriptyline, nortriptyline, imipramine
- Effective but more side effects
- Lethal in overdose

**Monoamine Oxidase Inhibitors (MAOIs)**
- Phenelzine, tranylcypromine
- Dietary restrictions required
- Reserved for treatment-resistant cases

### Novel Treatments

**Ketamine and Esketamine**
- Rapid-acting antidepressant effects
- NMDA receptor antagonist
- For treatment-resistant depression

**Transcranial Magnetic Stimulation (TMS)**
- Non-invasive brain stimulation
- FDA-approved for treatment-resistant depression
- Repetitive pulses to prefrontal cortex

**Electroconvulsive Therapy (ECT)**
- Most effective treatment for severe depression
- Reserved for severe, treatment-resistant, or psychotic depression
- Requires anesthesia and muscle relaxation

**Deep Brain Stimulation (DBS)**
- Experimental treatment
- Surgical implantation of electrodes
- For severe, treatment-resistant cases

### Lifestyle Interventions

**Exercise**
- Aerobic exercise as effective as medication for mild-moderate depression
- Increases neurotrophic factors
- Improves mood and self-esteem

**Sleep Hygiene**
- Regular sleep schedule
- Sleep restriction therapy
- Addressing sleep disorders

**Nutrition**
- Mediterranean diet patterns
- Omega-3 fatty acids
- Folate and B-vitamin supplementation

**Social Support**
- Peer support groups
- Family therapy
- Community involvement

## Prognosis and Course

### Natural History
- **Episode Duration**: Untreated episodes typically last 6-13 months
- **Recovery**: 80-90% recover from first episode
- **Recurrence**: 50% risk after first episode, 70% after second, 90% after third
- **Chronic Course**: 15-20% develop chronic depression

### Factors Affecting Prognosis

**Good Prognosis**
- Early treatment initiation
- Good social support
- Absence of comorbid conditions
- Mild to moderate severity
- Good treatment adherence

**Poor Prognosis**
- Severe symptoms
- Psychotic features
- Comorbid substance use
- Personality disorders
- Chronic medical conditions
- Poor social support

### Relapse Prevention
- Maintenance medication therapy
- Ongoing psychotherapy
- Lifestyle modifications
- Stress management
- Early warning sign recognition

## Special Populations

### Children and Adolescents
- Irritability may be prominent
- School refusal and academic decline
- Increased suicide risk
- Family involvement crucial
- Careful medication monitoring

### Older Adults
- Often underdiagnosed
- Medical comorbidities common
- Medication interactions
- Cognitive symptoms prominent
- Higher suicide risk in elderly men

### Pregnancy and Postpartum
- Risk-benefit analysis for medications
- Postpartum depression screening
- Impact on infant development
- Specialized treatment approaches

### Comorbid Conditions
- Anxiety disorders (50-60% comorbidity)
- Substance use disorders
- Medical conditions
- Personality disorders
- Eating disorders

## Public Health Implications

### Economic Burden
- Direct healthcare costs
- Lost productivity
- Disability payments
- Family and caregiver burden

### Prevention Strategies
- Early identification and intervention
- School-based mental health programs
- Workplace wellness initiatives
- Community mental health services
- Reducing stigma and barriers to care

### Healthcare System Considerations
- Integrated care models
- Collaborative care approaches
- Measurement-based care
- Quality improvement initiatives
- Access to evidence-based treatments

## Future Directions

### Research Areas
- Personalized medicine approaches
- Biomarker development
- Novel therapeutic targets
- Digital therapeutics
- Prevention strategies

### Emerging Treatments
- Psychedelic-assisted therapy
- Precision psychiatry
- Neuromodulation techniques
- Microbiome interventions
- Gene therapy approaches

## Conclusion

Major Depressive Disorder represents one of the most significant public health challenges of our time. The DSM-5 criteria provide a standardized framework for diagnosis, but the complexity of depression requires individualized, comprehensive treatment approaches.

Understanding the multifaceted nature of depression - from neurobiological mechanisms to psychosocial factors - is crucial for effective treatment. The integration of evidence-based psychotherapy, pharmacotherapy, and lifestyle interventions offers hope for recovery and improved quality of life.

As our understanding of depression continues to evolve, new treatments and prevention strategies emerge. The future of depression treatment lies in personalized approaches that consider individual differences in genetics, neurobiology, psychology, and social circumstances.

The journey from despair to recovery is possible with appropriate treatment, support, and hope. By continuing to advance our scientific understanding and improve access to care, we can reduce the burden of depression and help individuals reclaim their lives and well-being.`,
    tags: ['depression', 'DSM-5', 'clinical psychology', 'mental health', 'diagnosis'],
    lastUpdated: '2024-02-01',
    author: 'Dr. Robert Kim, Clinical Psychology',
    citations: [
      'American Psychiatric Association. (2013). Diagnostic and statistical manual of mental disorders (5th ed.).',
      'Beck, A. T., Steer, R. A., & Brown, G. K. (1996). Manual for the Beck Depression Inventory-II. Psychological Corporation.',
      'Cuijpers, P., et al. (2019). A meta-analysis of cognitive-behavioural therapy for adult depression, alone and in comparison with other treatments. Canadian Journal of Psychiatry, 58(7), 376-385.'
    ],
    isBookmarked: false,
    progress: 'not-started' as const,
    relatedTopics: ['attachment-theory-bowlby', 'working-memory-model']
  }
]

export const realQuizzes: Quiz[] = [
  {
    id: 'classical-conditioning-quiz',
    topicId: 'classical-conditioning',
    title: 'Classical Conditioning Assessment',
    description: 'Test your understanding of Pavlov\'s classical conditioning principles and applications.',
    questions: [
      {
        id: 'cc-q1',
        question: 'In Pavlov\'s original experiment, what was the unconditioned stimulus (UCS)?',
        options: [
          'The bell',
          'The food powder',
          'The salivation',
          'The laboratory setting'
        ],
        correctAnswer: 1,
        explanation: 'The food powder was the unconditioned stimulus because it naturally and automatically caused salivation without any prior learning. The UCS is always the stimulus that produces a natural, unlearned response.',
        difficulty: 'easy'
      },
      {
        id: 'cc-q2',
        question: 'Which process occurs when a conditioned response gradually weakens and disappears after repeated presentations of the conditioned stimulus without the unconditioned stimulus?',
        options: [
          'Generalization',
          'Discrimination',
          'Extinction',
          'Spontaneous recovery'
        ],
        correctAnswer: 2,
        explanation: 'Extinction occurs when the conditioned stimulus (CS) is repeatedly presented without the unconditioned stimulus (UCS), causing the conditioned response to gradually weaken and disappear. This demonstrates that the learned association can be unlearned.',
        difficulty: 'medium'
      },
      {
        id: 'cc-q3',
        question: 'A patient feels nauseous every time they enter a hospital because they associate the hospital smell with chemotherapy treatments. This is an example of:',
        options: [
          'Operant conditioning',
          'Classical conditioning',
          'Observational learning',
          'Cognitive learning'
        ],
        correctAnswer: 1,
        explanation: 'This is classical conditioning because the hospital smell (originally neutral) has become associated with chemotherapy (which naturally causes nausea), so now the smell alone triggers nausea. This demonstrates how classical conditioning can explain the development of conditioned responses in medical settings.',
        difficulty: 'medium'
      },
      {
        id: 'cc-q4',
        question: 'In higher-order conditioning, what serves as the unconditioned stimulus in the second phase of conditioning?',
        options: [
          'The original neutral stimulus',
          'A completely new stimulus',
          'The previously established conditioned stimulus',
          'The original unconditioned stimulus'
        ],
        correctAnswer: 2,
        explanation: 'In higher-order conditioning, the previously established conditioned stimulus from the first phase of conditioning serves as the "unconditioned stimulus" for the second phase. This allows for the creation of chains of conditioned associations.',
        difficulty: 'hard'
      },
      {
        id: 'cc-q5',
        question: 'Garcia and Koelling\'s research on taste aversions demonstrated that:',
        options: [
          'All stimuli can be equally easily conditioned with all responses',
          'Biological preparedness influences what associations are easily learned',
          'Classical conditioning only works with food-related stimuli',
          'Taste aversions require immediate pairing of stimulus and response'
        ],
        correctAnswer: 1,
        explanation: 'Garcia and Koelling\'s research showed that organisms are biologically prepared to form certain associations more easily than others. Animals readily learn to associate tastes with illness (even with long delays) but have difficulty associating lights or sounds with illness, demonstrating biological constraints on learning.',
        difficulty: 'hard'
      }
    ],
    timeLimit: 600,
    passingScore: 70
  },
  {
    id: 'cognitive-dissonance-quiz',
    topicId: 'cognitive-dissonance',
    title: 'Cognitive Dissonance Theory Assessment',
    description: 'Evaluate your knowledge of Festinger\'s cognitive dissonance theory and its applications.',
    questions: [
      {
        id: 'cd-q1',
        question: 'According to Festinger\'s cognitive dissonance theory, what motivates people to change their attitudes or behaviors?',
        options: [
          'Social pressure from others',
          'Desire for social approval',
          'Psychological discomfort from inconsistent cognitions',
          'Fear of punishment'
        ],
        correctAnswer: 2,
        explanation: 'Cognitive dissonance theory proposes that people are motivated by the psychological discomfort (dissonance) that arises when they hold contradictory beliefs, attitudes, or when their behavior conflicts with their attitudes. This discomfort motivates them to reduce the inconsistency.',
        difficulty: 'easy'
      },
      {
        id: 'cd-q2',
        question: 'In the Festinger and Carlsmith (1959) study, why did participants paid $1 rate the boring task more favorably than those paid $20?',
        options: [
          'They were more motivated by the smaller payment',
          'They had insufficient justification for lying, so they changed their attitude',
          'They felt guilty about taking money for an easy task',
          'The $20 group was suspicious of the large payment'
        ],
        correctAnswer: 1,
        explanation: 'The $1 group experienced more dissonance because they had insufficient external justification for telling others the task was interesting when it was actually boring. To reduce this dissonance, they convinced themselves the task was actually somewhat enjoyable. The $20 group had sufficient external justification (the large payment) for their behavior.',
        difficulty: 'medium'
      },
      {
        id: 'cd-q3',
        question: 'Which of the following is NOT a typical way people reduce cognitive dissonance?',
        options: [
          'Changing their attitude to match their behavior',
          'Seeking information that supports their existing beliefs',
          'Increasing the importance of the conflicting cognitions',
          'Adding new cognitions that justify their behavior'
        ],
        correctAnswer: 2,
        explanation: 'People typically reduce dissonance by decreasing (not increasing) the importance of conflicting cognitions. Other common strategies include changing attitudes, seeking confirming information, and adding justifying cognitions. Increasing the importance of conflicts would actually increase dissonance.',
        difficulty: 'medium'
      },
      {
        id: 'cd-q4',
        question: 'Post-decision dissonance is most likely to occur when:',
        options: [
          'The decision was easy and obvious',
          'The alternatives were very different from each other',
          'The decision was between two attractive alternatives',
          'The person had no choice in the matter'
        ],
        correctAnswer: 2,
        explanation: 'Post-decision dissonance is strongest when choosing between two attractive alternatives because the person must give up the positive aspects of the rejected option while accepting the negative aspects of the chosen option. This creates the most psychological conflict.',
        difficulty: 'hard'
      },
      {
        id: 'cd-q5',
        question: 'The "When Prophecy Fails" study demonstrated that when strongly held beliefs are disconfirmed, believers often:',
        options: [
          'Immediately abandon their beliefs',
          'Become more committed to their beliefs and seek to convert others',
          'Become depressed and withdraw from social contact',
          'Develop more realistic and moderate beliefs'
        ],
        correctAnswer: 1,
        explanation: 'Festinger\'s study of a UFO cult showed that when their predicted apocalypse failed to occur, rather than abandoning their beliefs, members actually became more committed and began proselytizing more actively. They reduced dissonance by adding new cognitions (rationalizations) and seeking social support for their beliefs.',
        difficulty: 'hard'
      }
    ],
    timeLimit: 600,
    passingScore: 70
  },
  {
    id: 'working-memory-quiz',
    topicId: 'working-memory-model',
    title: 'Working Memory Model Assessment',
    description: 'Test your understanding of Baddeley\'s working memory model and its components.',
    questions: [
      {
        id: 'wm-q1',
        question: 'Which component of Baddeley\'s working memory model is responsible for controlling attention and coordinating the other subsystems?',
        options: [
          'Phonological loop',
          'Visuospatial sketchpad',
          'Central executive',
          'Episodic buffer'
        ],
        correctAnswer: 2,
        explanation: 'The central executive is the supervisory system that controls attention, coordinates information flow between subsystems, and manages cognitive processes. It acts as the "boss" of the working memory system.',
        difficulty: 'easy'
      },
      {
        id: 'wm-q2',
        question: 'The word length effect in memory span (shorter words recalled better than longer words) provides evidence for which component?',
        options: [
          'Central executive',
          'Phonological loop',
          'Visuospatial sketchpad',
          'Episodic buffer'
        ],
        correctAnswer: 1,
        explanation: 'The word length effect supports the phonological loop because it shows that memory span is limited by how much can be rehearsed in about 2 seconds. Shorter words can be rehearsed more quickly, allowing more items to be maintained in the phonological store.',
        difficulty: 'medium'
      },
      {
        id: 'wm-q3',
        question: 'What happens when people engage in articulatory suppression (repeatedly saying "the, the, the") while trying to remember a list of words?',
        options: [
          'Visual memory is impaired',
          'Spatial memory is impaired',
          'Verbal memory span is reduced',
          'Executive function is enhanced'
        ],
        correctAnswer: 2,
        explanation: 'Articulatory suppression prevents the articulatory rehearsal process from refreshing information in the phonological store, leading to reduced verbal memory span. This demonstrates the importance of subvocal rehearsal in maintaining verbal information.',
        difficulty: 'medium'
      },
      {
        id: 'wm-q4',
        question: 'The episodic buffer was added to the working memory model in 2000 primarily to explain:',
        options: [
          'How visual and verbal information are kept separate',
          'How information is integrated from different sources and linked to long-term memory',
          'How attention is divided between multiple tasks',
          'How information decays over time'
        ],
        correctAnswer: 1,
        explanation: 'The episodic buffer was added to explain how information from the phonological loop and visuospatial sketchpad could be integrated with information from long-term memory to create coherent episodes. It serves as an interface between working memory components and consciousness.',
        difficulty: 'hard'
      },
      {
        id: 'wm-q5',
        question: 'Neuroimaging studies have shown that the central executive is primarily associated with activity in which brain region?',
        options: [
          'Temporal lobe',
          'Occipital lobe',
          'Prefrontal cortex',
          'Cerebellum'
        ],
        correctAnswer: 2,
        explanation: 'The prefrontal cortex, particularly the dorsolateral prefrontal cortex, shows strong activation during working memory tasks requiring central executive function. This region is crucial for attention control, cognitive flexibility, and working memory updating.',
        difficulty: 'hard'
      }
    ],
    timeLimit: 600,
    passingScore: 70
  },
  {
    id: 'attachment-theory-quiz',
    topicId: 'attachment-theory-bowlby',
    title: 'Attachment Theory Assessment',
    description: 'Assess your knowledge of Bowlby\'s attachment theory and attachment styles.',
    questions: [
      {
        id: 'at-q1',
        question: 'According to Bowlby, the primary evolutionary function of attachment behavior is to:',
        options: [
          'Promote learning and cognitive development',
          'Ensure survival by maintaining proximity to caregivers',
          'Develop social skills for later relationships',
          'Create emotional bonds for psychological well-being'
        ],
        correctAnswer: 1,
        explanation: 'Bowlby proposed that attachment behavior evolved primarily to ensure infant survival by keeping them close to protective caregivers. This proximity-seeking behavior increases the chances of protection from predators and other dangers.',
        difficulty: 'easy'
      },
      {
        id: 'at-q2',
        question: 'In Ainsworth\'s Strange Situation, a child who shows little distress when the mother leaves and avoids her upon return would be classified as:',
        options: [
          'Securely attached',
          'Insecure-avoidant',
          'Insecure-resistant/ambivalent',
          'Disorganized'
        ],
        correctAnswer: 1,
        explanation: 'Insecure-avoidant children show minimal distress during separation and tend to avoid or ignore the caregiver upon reunion. This pattern typically develops when caregivers are consistently unresponsive or rejecting of the child\'s attachment needs.',
        difficulty: 'medium'
      },
      {
        id: 'at-q3',
        question: 'Internal working models in attachment theory refer to:',
        options: [
          'Cognitive representations of self and others in relationships',
          'Behavioral patterns learned through conditioning',
          'Genetic predispositions for social behavior',
          'Unconscious defense mechanisms'
        ],
        correctAnswer: 0,
        explanation: 'Internal working models are cognitive-emotional representations that children develop about themselves (Am I worthy of love?) and others (Are others reliable and responsive?). These models guide expectations and behaviors in relationships throughout life.',
        difficulty: 'medium'
      },
      {
        id: 'at-q4',
        question: 'Which attachment style is characterized by contradictory behaviors toward the caregiver, such as seeking comfort while simultaneously showing anger or resistance?',
        options: [
          'Secure',
          'Avoidant',
          'Resistant/Ambivalent',
          'Disorganized'
        ],
        correctAnswer: 3,
        explanation: 'Disorganized attachment is characterized by contradictory, confused behaviors toward the caregiver. Children may approach while showing fear, or display other conflicting behaviors. This pattern often occurs when the caregiver is both a source of comfort and fear.',
        difficulty: 'hard'
      },
      {
        id: 'at-q5',
        question: 'Research on adult attachment has found that securely attached adults typically:',
        options: [
          'Avoid intimate relationships to maintain independence',
          'Are comfortable with intimacy and autonomy in relationships',
          'Seek excessive closeness and fear abandonment',
          'Have difficulty trusting others in relationships'
        ],
        correctAnswer: 1,
        explanation: 'Securely attached adults are comfortable with both intimacy and autonomy. They can depend on others and have others depend on them without losing their sense of self. They tend to have positive views of both themselves and others in relationships.',
        difficulty: 'hard'
      }
    ],
    timeLimit: 600,
    passingScore: 70
  },
  {
    id: 'major-depression-quiz',
    topicId: 'dsm5-major-depression',
    title: 'Major Depressive Disorder Assessment',
    description: 'Test your knowledge of DSM-5 criteria and clinical features of Major Depressive Disorder.',
    questions: [
      {
        id: 'mdd-q1',
        question: 'According to DSM-5, how many symptoms must be present for at least 2 weeks to diagnose Major Depressive Disorder?',
        options: [
          'At least 3 symptoms',
          'At least 4 symptoms',
          'At least 5 symptoms',
          'At least 6 symptoms'
        ],
        correctAnswer: 2,
        explanation: 'DSM-5 requires at least 5 symptoms to be present during the same 2-week period for a diagnosis of Major Depressive Disorder. At least one symptom must be either depressed mood or loss of interest/pleasure (anhedonia).',
        difficulty: 'easy'
      },
      {
        id: 'mdd-q2',
        question: 'Which of the following is required for a diagnosis of Major Depressive Disorder?',
        options: [
          'Symptoms must cause clinically significant distress or impairment',
          'Symptoms must be present for at least 6 months',
          'There must be a clear precipitating stressor',
          'The person must have suicidal ideation'
        ],
        correctAnswer: 0,
        explanation: 'DSM-5 requires that symptoms cause clinically significant distress or impairment in social, occupational, or other important areas of functioning. The duration requirement is 2 weeks (not 6 months), and neither a precipitating stressor nor suicidal ideation is required.',
        difficulty: 'medium'
      },
      {
        id: 'mdd-q3',
        question: 'The "melancholic features" specifier for Major Depressive Disorder includes all of the following EXCEPT:',
        options: [
          'Loss of pleasure in all or almost all activities',
          'Mood reactivity to positive events',
          'Early morning awakening',
          'Psychomotor agitation or retardation'
        ],
        correctAnswer: 1,
        explanation: 'Melancholic features include LACK of mood reactivity (not mood reactivity to positive events). Other features include loss of pleasure, distinct quality of mood, early morning awakening, psychomotor changes, anorexia, and excessive guilt.',
        difficulty: 'hard'
      },
      {
        id: 'mdd-q4',
        question: 'Which neurotransmitter systems are primarily implicated in the monoamine hypothesis of depression?',
        options: [
          'GABA and glutamate',
          'Acetylcholine and histamine',
          'Serotonin, norepinephrine, and dopamine',
          'Oxytocin and vasopressin'
        ],
        correctAnswer: 2,
        explanation: 'The monoamine hypothesis suggests that depression results from deficiencies in the monoamine neurotransmitters: serotonin, norepinephrine, and dopamine. This hypothesis forms the basis for most antidepressant medications.',
        difficulty: 'medium'
      },
      {
        id: 'mdd-q5',
        question: 'What is the approximate lifetime prevalence of Major Depressive Disorder in the United States?',
        options: [
          '5.4%',
          '8.7%',
          '10.8%',
          '15.2%'
        ],
        correctAnswer: 2,
        explanation: 'The lifetime prevalence of Major Depressive Disorder in the United States is approximately 10.8%, making it one of the most common mental health conditions. The 12-month prevalence is about 7% in young adults.',
        difficulty: 'hard'
      }
    ],
    timeLimit: 600,
    passingScore: 70
  }
]