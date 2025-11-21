import avatarImg from '../assets/avatar.jpg';
import paper2025ACMMMDITL from '../assets/paper/2025-ACMMM-DITL.png';
import paper2025ICMLEffort from '../assets/paper/2025-ICML-Effort.png';
import paper2025CVPRVLFFD from '../assets/paper/2025-CVPR-VLFFD.png';
import paper2025IJCVHDP from '../assets/paper/2025-IJCV-HDP.png';
import paper2025IJCVMPSL from '../assets/paper/2025-IJCV-MPSL.png';
import paper2024NeurIPSDF40 from '../assets/paper/2024-NeurIPS-DF40.png';
import paper2024DiffusionFake from '../assets/paper/2024-NeurIPS-DiffusionFake.png';
import paper2024ECCVFFDN from '../assets/paper/2024-ECCV-FFDN.png';
import paper2022CVPRRECCE from '../assets/paper/2022-CVPR-RECCE.png';
import paper2021AAAILRL from '../assets/paper/2021-AAAI-LRL.png';
import paper2020IJCVHMOH from '../assets/paper/2020-IJCV-HMOH.png';
import paper2020TIPSOH from '../assets/paper/2020-TIP-SOH.png';

export const profileData = {
  name: "Shen Chen (陈燊)",
  title: "Researcher at Tencent Youtu Lab",
  university: "Tencent Youtu Lab",
  avatar: avatarImg,
  about: {
    en: "I am a Researcher at Tencent Youtu Lab, where I work on computer vision and machine learning. My research interests include multimodal large language models, image forensics, deepfake detection and AIGC generation. I have published over 20 papers in top-tier conferences and journals (CVPR, ICCV, ECCV, AAAI, IJCV, etc.) with 2000+ citations.",
    zh: "我是腾讯优图实验室的研究员，从事计算机视觉和机器学习方面的研究。我的研究兴趣包括多模态大模型、图像取证、深度伪造检测、AIGC生成。我在顶级会议和期刊（CVPR, ICCV, ECCV, AAAI, IJCV 等）发表了 20 多篇论文，引用次数超过 2000 次。"
  },
  interests: {
    en: ["Multimodal Large Language Models", "Image Forensics", "Deepfake Detection", "AIGC Generation"],
    zh: ["多模态大模型", "图像取证", "深度伪造检测", "AIGC生成"]
  },
  education: [
    {
      school: "Xiamen University",
      degree: "M.S. in Computer Science",
      year: "2018 - 2021",
      lab: { name: "MAC Lab", url: "https://mac.xmu.edu.cn/" },
      supervisor: { name: "Rongrong Ji", url: "https://mac.xmu.edu.cn/rrji/" }
    },
    {
      school: "Fuzhou University",
      degree: "B.S. in Computer Science",
      year: "2014 - 2018"
    }
  ],
  social: {
    email: "chenshen003@gmail.com",
    github: "https://github.com/chenshen03/",
    scholar: "https://scholar.google.com/citations?user=xMpvoLMAAAAJ&hl=en"
  }
};

export const activities = [
  {
    id: 4,
    date: "2025",
    title: {
      en: "2 paper accepted by AAAI 2026",
      zh: "2 篇论文被 ACMMM 2026 接收"
    },
    papers: [
      {
        en: "TripleFDS: Triple Feature Disentanglement and Synthesis for Scene Text Editing",
        zh: "TripleFDS：三特征解耦和合成用于场景文本编辑"
      },
      {
        en: "Zooming In on Fakes: A Novel Dataset for Localized AI-Generated Image Detection with Forgery Amplification Approach",
        zh: "聚焦于伪造：一个用于局部AI生成图像检测的新数据集，采用伪造放大方法"
      }
    ]
  },
  {
    id: 1,
    date: "2025",
    title: {
      en: "1 paper accepted by ACMMM 2025",
      zh: "1 篇论文被 ACMMM 2025 接收"
    },
    papers: [
      {
        en: "DITL2: Dual-Stage Invariance Transfer Learning for Generalizable Document Image Tampering Localization",
        zh: "DITL2：双阶段不变性迁移学习用于通用文档图像篡改定位"
      }
    ]
  },
  {
    id: 2,
    date: "2025",
    title: {
      en: "1 paper accepted by TCSVT 2025",
      zh: "1 篇论文被 TCSVT 2025 接收"
    },
    papers: [
      {
        en: "Generalized Document Tampering Localization via Color and Semantic Disentanglement",
        zh: "通过颜色和语义解耦的通用文档篡改定位"
      }
    ]
  },
  {
    id: 3,
    date: "2025",
    title: {
      en: "1 paper accepted by TIP 2025",
      zh: "1 篇论文被 TIP 2025 接收"
    },
    papers: [
      {
        en: "Faces Blind Your Eyes: Unveiling the Content-Irrelevant Synthetic Artifacts for Deepfake Detection",
        zh: "人脸蒙蔽双眼：揭示深度伪造检测中与内容无关的合成伪影"
      }
    ]
  },
  {
    id: 4,
    date: "2025",
    title: {
      en: "1 paper accepted by ICML 2025",
      zh: "1 篇论文被 ICML 2025 接收"
    },
    papers: [
      {
        en: "Effort: Efficient orthogonal modeling for generalizable ai-generated image detection",
        zh: "Effort：高效正交建模用于通用AI生成图像检测"
      }
    ]
  },
  {
    id: 5,
    date: "2025",
    title: {
      en: "2 papers accepted by CVPR 2025",
      zh: "2 篇论文被 CVPR 2025 接收"
    },
    papers: [
      {
        en: "Generalizing Deepfake Video Detection with Plug-and-Play: Video-Level Blending and Spatiotemporal Adapter Tuning",
        zh: "通过即插即用泛化深度伪造视频检测：视频级混合和时空适配器调优"
      },
      {
        en: "Towards general visual-linguistic face forgery detection",
        zh: "面向通用视觉-语言人脸伪造检测"
      }
    ]
  },
  {
    id: 6,
    date: "2025",
    title: {
      en: "2 papers accepted by IJCV 2025",
      zh: "2 篇论文被 IJCV 2025 接收"
    },
    papers: [
      {
        en: "Continual face forgery detection via historical distribution preserving",
        zh: "通过保留历史分布进行持续人脸伪造检测"
      },
      {
        en: "Rethinking open-world deepfake attribution with multi-perspective sensory learning",
        zh: "利用多视角感知学习重新思考开放世界深度伪造归因"
      }
    ]
  },
  {
    id: 7,
    date: "2024",
    title: {
      en: "2 papers accepted by NeurIPS 2024",
      zh: "2 篇论文被 NeurIPS 2024 接收"
    },
    papers: [
      {
        en: "Df40: Toward next-generation deepfake detection",
        zh: "Df40：迈向下一代深度伪造检测"
      },
      {
        en: "Diffusionfake: Enhancing generalization in deepfake detection via guided stable diffusion",
        zh: "Diffusionfake：通过引导稳定扩散增强深度伪造检测的泛化能力"
      }
    ]
  },
  {
    id: 8,
    date: "2024",
    title: {
      en: "1 paper accepted by ECCV 2024",
      zh: "1 篇论文被 ECCV 2024 接收"
    },
    papers: [
      {
        en: "Enhancing tampered text detection through frequency feature fusion and decomposition",
        zh: "通过频率特征融合和分解增强篡改文本检测"
      }
    ]
  },
  {
    id: 9,
    date: "2022",
    title: {
      en: "1 paper accepted by CVPR 2022",
      zh: "1 篇论文被 CVPR 2022 接收"
    },
    papers: [
      {
        en: "End-to-end reconstruction-classification learning for face forgery detection",
        zh: "用于人脸伪造检测的端到端重建-分类学习"
      }
    ]
  },
  {
    id: 10,
    date: "2023",
    title: {
      en: "1 paper accepted by ICCV 2023",
      zh: "1 篇论文被 ICCV 2023 接收"
    },
    papers: [
      {
        en: "Contrastive pseudo learning for open-world deepfake attribution",
        zh: "用于开放世界深度伪造归因的对比伪学习"
      }
    ]
  },
  {
    id: 11,
    date: "2021",
    title: {
      en: "1 paper accepted by AAAI 2021",
      zh: "1 篇论文被 AAAI 2021 接收"
    },
    papers: [
      {
        en: "Local Relation Learning for Deepfake Detection",
        zh: "用于人脸伪造检测的局部关系学习"
      }
    ]
  },
  {
    id: 12,
    date: "2020",
    title: {
      en: "1 paper accepted by IJCV 2020",
      zh: "1 篇论文被 IJCV 2020 接收"
    },
    papers: [
      {
        en: "Hadamard Matrix Guided Online Hashing",
        zh: "基于Hadamard矩阵的在线哈希"
      }
    ]
  },
  {
    id: 13,
    date: "2020",
    title: {
      en: "1 paper accepted by TIP 2020",
      zh: "1 篇论文被 TIP 2020 接收"
    },
    papers: [
      {
        en: "Similarity-preserving linkage hashing for online image retrieval",
        zh: "用于在线图像检索的相似性保持链接哈希"
      }
    ]
  }
];

export const publications = [
  {
    id: "p2025_1",
    title: {
      en: "DITL2: Dual-Stage Invariance Transfer Learning for Generalizable Document Image Tampering Localization",
      zh: "DITL2：双阶段不变性迁移学习用于通用文档图像篡改定位"
    },
    authors: "S Li, Y Guo, S Chen, B Li, K Lin, C Chen, H Li, T Yao, S Ding",
    conference: "ACMMM 2025",
    year: 2025,
    abstract: {
      en: "Document Image Tampering Localization (DITL) advances considerably, yet achieving robust cross-dataset generalization remains a formidable challenge for practical applications. Expanding existing document datasets for training is labor-intensive, making it appealing to incorporate data from non-document domains such as natural scene images. However, domain-specific variations, including differences in color distribution and texture, compromise the performance of joint training. To address this issue, we propose DITL2, aDual-stage Invariance Transfer Learning framework for DocumentImage Tampering Localization that consists of Cross-Domain Invariance Pre-training (CDIP) and Frequency Decoupling Parameter Adaptation (FDPA). In the pre-training stage, CDIP employs style transfer and texture consistency learning to suppress domainspecific influences from tampered natural scene images, and tampering trace commonality learning to acquire domain-invariant features. In the fine-tuning stage, FDPA adapts the parameters of the pre-trained model, leveraging the general knowledge from the pre-trained model to address DITL tasks while reducing the risk of overfitting. Experiments show that this approach effectively leverages external data resources to boost model performance, achieving state-of-the-art results across a variety of cross-dataset settings.",
      zh: "文档图像篡改定位（DITL）取得了显著进展，但实现跨数据集的鲁棒泛化仍然是实际应用中的一个严峻挑战。扩展现有文档数据集进行训练是劳动密集型的，因此将非文档域（如自然场景图像）的数据纳入训练是很有吸引力的。然而，域特定的变化，包括颜色分布和纹理的差异，会破坏联合训练的性能。为了解决这个问题，我们提出了DITL2，一个双阶段不变性迁移学习框架，用于文档图像篡改定位，由跨域不变性预训练（CDIP）和频率解耦参数适应（FDPA）组成。在预训练阶段，CDIP采用风格迁移和纹理一致性学习来抑制篡改的自然场景图像中的域特定影响，以及篡改痕迹共同学习来获取域不变特征。在微调阶段，FDPA适应预训练模型的参数，利用预训练模型的通用知识来解决DITL任务，同时降低过拟合的风险。实验表明，这种方法有效地利用外部数据资源来提升模型性能，在各种跨域设置上实现了最先进的性能。"
    },
    links: {
      pdf: "https://dl.acm.org/doi/pdf/10.1145/3746027.3754857",
    },
    image: paper2025ACMMMDITL,
    tags: ["Document Tamper Detection"]
  },
  {
    id: "p2025_2",
    title: {
      en: "Effort: Efficient orthogonal modeling for generalizable ai-generated image detection",
      zh: "Effort：高效正交建模用于通用AI生成图像检测"
    },
    authors: "Z Yan, J Wang, Z Wang, P Jin, KY Zhang, S Chen, T Yao, S Ding, B Wu, L Yuan",
    conference: "ICML 2025",
    year: 2025,
    abstract: {
      en: "Existing AI-generated image (AIGI) detection methods often suffer from limited generalization performance. In this paper, we identify a crucial yet previously overlooked asymmetry phenomenon in AIGI detection: during training, models tend to quickly overfit to specific fake patterns in the training set, while other information is not adequately captured, leading to poor generalization when faced with new fake methods. A key insight is to incorporate the rich semantic knowledge embedded within large-scale vision foundation models (VFMs) to expand the previous discriminative space (based on forgery patterns only), such that the discrimination is decided by both forgery and semantic cues, thereby reducing the overfitting to specific forgery patterns. A straightforward solution is to fully fine-tune VFMs, but it risks distorting the well-learned semantic knowledge, pushing the model back toward overfitting. To this end, we design a novel approach called Effort: Efficient orthogonal modeling for generalizable AIGI detection. Specifically, we employ Singular Value Decomposition (SVD) to construct the orthogonal semantic and forgery subspaces. By freezing the principal components and adapting the residual components (∼0.19M parameters), we preserve the original semantic subspace and use its orthogonal subspace for learning forgeries. Extensive experiments on AIGI detection benchmarks demonstrate the superior effectiveness of our approach.",
      zh: "现有AI生成图像（AIGI）检测方法通常存在泛化性能有限的问题。在本文中，我们识别了一个之前被忽视的关键不对称现象：在训练过程中，模型倾向于快速拟合训练集中的特定伪造模式，而其他信息未能充分捕获，导致在面对新伪造方法时泛化性能不佳。一个关键的洞察是，将大规模视觉基础模型（VFMs）中嵌入的丰富语义知识纳入到之前的判别空间（仅基于伪造模式）中，使得判别由伪造和语义线索共同决定，从而减少对特定伪造模式的过拟合。一个直接的解决方案是完全微调VFMs，但这样做会破坏已学习的语义知识，使模型重新偏向过拟合。为此，我们提出了一种新颖的方法：Effort：高效正交建模用于通用AIGI检测。具体来说，我们采用奇异值分解（SVD）构造正交语义和伪造子空间。通过冻结主成分并适应残差成分（约0.19M参数），我们保留原始语义子空间并使用其正交子空间学习伪造。在AIGI检测基准上的大量实验证明了我们方法的有效性。"
    },
    links: {
      pdf: "https://arxiv.org/pdf/2411.15633v1",
      code: "https://github.com/YZY-stack/Effort-AIGI-Detection"
    },
    image: paper2025ICMLEffort,
    tags: ["AIGI Detection"]
  },
  {
    id: "p2025_3",
    title: {
      en: "Towards general visual-linguistic face forgery detection",
      zh: "面向通用视觉-语言人脸伪造检测"
    },
    authors: "K Sun, S Chen, T Yao, Z Zhou, J Ji, X Sun, CW Lin, R Ji",
    conference: "CVPR 2025",
    year: 2025,
    abstract: {
      en: "Face manipulation techniques have achieved significant advances, presenting serious challenges to security and social trust. Recent works demonstrate that leveraging multimodal models can enhance the generalization and interpretability of face forgery detection. However, existing annotation approaches, whether through human labeling or direct Multimodal Large Language Model (MLLM) generation, often suffer from hallucination issues, leading to inaccurate text descriptions, especially for high-quality forgeries. To address this, we propose Face Forgery Text Generator (FFTG), a novel annotation pipeline that generates accurate text descriptions by leveraging forgery masks for initial region and type identification, followed by a comprehensive prompting strategy to guide MLLMs in reducing hallucination. We validate our approach through fine-tuning both CLIP with a three-branch training framework combining unimodal and multimodal objectives, and MLLMs with our structured annotations. Experimental results demonstrate that our method not only achieves more accurate annotations with higher region identification accuracy, but also leads to improvements in model performance across various forgery detection benchmarks.",
      zh: "人脸操纵技术取得了显著进展，对安全和社会信任构成了严重挑战。最近的工作表明，利用多模态模型可以增强人脸伪造检测的泛化和可解释性。然而，现有的注释方法，无论是通过人工标注还是直接使用多模态大语言模型（MLLM）生成，往往存在幻觉问题，导致不准确文本描述，特别是对于高质量伪造。为了解决这个问题，我们提出了人脸伪造文本生成器（FFTG），一个新颖的注释管道，通过利用伪造掩码进行初始区域和类型识别，接着通过全面的提示策略指导MLLMs减少幻觉。我们通过微调CLIP与一个三分支训练框架结合单模态和多模态目标，以及与我们的结构化注释的MLLMs来验证我们的方法。实验结果表明，我们的方法不仅实现了更准确的注释，提高了区域识别准确性，而且在各种伪造检测基准上提高了模型性能。"
    },
    links: {
      pdf: "https://openaccess.thecvf.com/content/CVPR2025/papers/Sun_Towards_General_Visual-Linguistic_Face_Forgery_Detection_CVPR_2025_paper.pdf",
      code: "https://github.com/skJack/VLFFD"
    },
    image: paper2025CVPRVLFFD,
    tags: ["Deepfake Detection", "Visual-Linguistic"]
  },
  {
    id: "p2025_4",
    title: {
      en: "Continual face forgery detection via historical distribution preserving",
      zh: "通过保留历史分布进行持续人脸伪造检测"
    },
    authors: "K Sun, S Chen, T Yao, X Sun, S Ding, R Ji",
    conference: "IJCV 2025",
    year: 2025,
    abstract: {
      en: "Face forgery techniques have advanced rapidly and pose serious security threats. Existing face forgery detection methods try to learn generalizable features, but they still fall short of practical application. Additionally, finetuning these methods on historical training data is resource-intensive in terms of time and storage. In this paper, we focus on a novel and challenging problem: Continual Face Forgery Detection (CFFD), which aims to efficiently learn from new forgery attacks without forgetting previous ones. Specifically, we propose a Historical Distribution Preserving (HDP) framework that reserves and preserves the distributions of historical faces. To achieve this, we use universal adversarial perturbation (UAP) to simulate historical forgery distribution, and knowledge distillation to maintain the distribution variation of real faces across different models. We also construct a new benchmark for CFFD with three evaluation protocols. Our extensive experiments on the benchmarks show that our method outperforms the state-of-the-art competitors.",
      zh: "面部伪造技术发展迅速，带来了严重的安全威胁。现有的面部伪造检测方法试图学习可泛化的特征，但仍未能满足实际应用的需求。此外，基于历史训练数据对这些方法进行微调在时间和存储方面耗费大量资源。在本文中，我们专注于一个新颖且具有挑战性的问题：持续面部伪造检测（CFFD），其目标是高效地从新的伪造攻击中学习，同时不遗忘之前的攻击。具体而言，我们提出了一个历史分布保持（HDP）框架，用于保留和保存历史面部的分布。为此，我们使用通用对抗扰动（UAP）来模拟历史伪造分布，并通过知识蒸馏来维持不同模型中真实面部分布的变化。我们还构建了一个新的CFFD基准测试，包含三种评估协议。我们在基准测试上的广泛实验表明，我们的方法优于现有的最先进竞争对手。"
    },
    links: {
      pdf: "https://arxiv.org/pdf/2308.06217",
      code: "https://github.com/skJack/HDP"
    },
    image: paper2025IJCVHDP,
    tags: ["Deepfake Detection", "Continual Learning"]
  },
  {
    id: "p2025_5",
    title: {
      en: "Rethinking open-world deepfake attribution with multi-perspective sensory learning",
      zh: "利用多视角感知学习重新思考开放世界深度伪造归因"
    },
    authors: "Z Sun, S Chen, T Yao, R Yi, S Ding, L Ma",
    conference: "IJCV 2025",
    year: 2025,
    abstract: {
      en: "The challenge in sourcing attribution for forgery faces has gained widespread attention due to the rapid development of generative techniques.While many recent works have taken essential steps on GAN-generated faces,more threatening attacks related to identity swapping or diffusion models are still overlooked. And the forgery traces hidden in unknown attacks from the open-world unlabeled faces remain under-explored. To push the related frontier research, we introduce a novel task named Open-World DeepFake Attribution, and the corresponding benchmark OW-DFA++, which aims to evaluate attribution performance against various types of fake faces in open-world scenarios. Meanwhile, we propose a Multi-Perspective Sensory Learning (MPSL) framework that aims to address the challenge of OW-DFA++. Since different forged faces have different tampering regions and frequency artifacts, we introduce theMulti-PerceptionVoting (MPV)module, which aligns inter-sample features based on global, multi-scale local, and frequency relations. The MPV module effectively filters and groups together samples belonging to the same attack type. Pseudo-labeling is another common and effective strategy in semi-supervised learning tasks, and we propose the Confidence-Adaptive Pseudo-labeling (CAP) module, using soft pseudo-labeling to enhance the class compactness and mitigate pseudo-noise induced by similar novel attack methods. The CAP module imposes strong constraints and adaptively filters samples with high uncertainty to improve the accuracy of the pseudo-labeling. In addition, we extend the MPSL framework with a multi-stage paradigm that leverages pre-train technique and iterative learning to further enhance traceability performance. Extensive experiments and visualizations verify the superiority of our proposed method on the OW-DFA++ and demonstrate the interpretability of the deepfake attribution task and its impact on improving the security of the deepfake detection area.",
      zh: "由于生成技术的迅速发展，伪造人脸溯源的挑战引起了广泛关注。尽管许多近期的研究在GAN生成的人脸方面取得了重要进展，但与身份互换或扩散模型相关的更具威胁性的攻击仍然被忽视。此外，来自开放世界未标记人脸的未知攻击中隐藏的伪造痕迹仍未得到充分研究。为了推动相关前沿研究，我们引入了一个名为开放世界深度伪造溯源的新任务，以及相应的基准测试OW-DFA++，旨在评估在开放世界场景下针对各种类型假脸的溯源性能。同时，我们提出了一个多视角感知学习（MPSL）框架，以应对OW-DFA++的挑战。由于不同伪造人脸具有不同的篡改区域和频率伪影，我们引入了多感知投票（MPV）模块，该模块基于全局、多尺度局部和频率关系对样本间特征进行对齐。MPV模块有效地筛选并聚集属于同一种攻击类型的样本。伪标签是半监督学习任务中常见且有效的策略，我们提出了置信度自适应伪标签（CAP）模块，使用软伪标签来增强类别紧凑性，并减轻由类似新型攻击方法引起的伪噪声。CAP模块施加了强约束，并自适应地筛选具有高不确定性的样本，以提高伪标签的准确性。此外，我们通过采用预训练技术和迭代学习的多阶段范式扩展了MPSL框架，以进一步增强可追溯性性能。广泛的实验和可视化验证了我们提出的方法在OW-DFA++上的优越性，并展示了深度伪造溯源任务的可解释性及其对提高深度伪造检测领域安全性的影响。"
    },
    links: {
      pdf: "https://link.springer.com/article/10.1007/s11263-024-02184-7",
      code: "https://github.com/TencentYoutuResearch/OpenWorld-DeepFakeAttribution"
    },
    image: paper2025IJCVMPSL,
    tags: ["Deepfake Attribution"]
  },
  {
    id: "p2024_1",
    title: {
      en: "Df40: Toward next-generation deepfake detection",
      zh: "Df40：迈向下一代深度伪造检测"
    },
    authors: "Z Yan, T Yao, S Chen, Y Zhao, X Fu, J Zhu, D Luo, C Wang, S Ding, Y Wu...",
    conference: "NeurIPS 2024",
    year: 2024,
    abstract: {
      en: "We propose a new comprehensive benchmark to revolutionize the current deepfake detection field to the next generation. Predominantly, existing works identify top-notch detection algorithms and models by adhering to the common practice: training detectors on one specific dataset (e.g., FF++ [62]) and testing them on other prevalent deepfake datasets. This protocol is often regarded as a 'golden compass' for navigating SoTA detectors. But can these stand-out 'winners' be truly applied to tackle the myriad of realistic and diverse deepfakes lurking in the real world? If not, what underlying factors contribute to this gap? In this work, we found the dataset (both train and test) can be the 'primary culprit' due to the following: (1) forgery diversity: Deepfake techniques are commonly referred to as both face forgery (face-swapping and face-reenactment) and entire face synthesis (especially face). Most existing datasets only contain partial types of them, with limited forgery methods implemented (e.g., 2 swapping and 2 reenactment methods in FF++); (2) forgery realism: The dominated training dataset, FF++, contains out-of-date forgery techniques from the past four years. 'Honing skills' on these forgeries makes it difficult to guarantee effective detection generalization toward nowadays’ SoTA deepfakes; (3) evaluation protocol: Most detection works perform evaluations on one type, e.g., training and testing on face-swapping types only, which hinders the development of universal deepfake detectors. To address this dilemma, we construct a highly diverse and large-scale deepfake detection dataset called DF40, which comprises 40 distinct deepfake techniques (10 times larger than FF++). We then conduct comprehensive evaluations using4 standard evaluation protocols and 8 representative detection methods, resulting in over 2,000 evaluations. Through these evaluations, we provide an extensive analysis from various perspectives, leading to 7 new insightful findings contributing to the field. We also open up 4 valuable yet previously underexplored research questions to inspire future works.",
      zh: "我们提出一个新的综合基准测试，旨在将当前的深度伪造检测领域推向新一代。目前，大多数现有研究通过以下常见做法来识别顶尖的检测算法和模型：在一个特定数据集（例如FF++ [62]）上训练检测器，并在其他流行的深度伪造数据集上进行测试。这种协议通常被视为导航最先进检测器的“黄金指南”。然而，这些脱颖而出的“优胜者”是否真的能够应对现实世界中潜伏的众多真实且多样化的深度伪造内容呢？如果不是，是什么潜在因素导致了这种差距呢？在本研究中，我们发现数据集（包括训练集和测试集）可能是“主要罪魁祸首”，原因如下：（1）伪造多样性：深度伪造技术通常包括人脸伪造（换脸和表情重演）以及完整人脸合成（尤其是人脸）。大多数现有数据集仅包含其中的部分类型，并且实施的伪造方法有限（例如，FF++中仅有2种换脸和2种表情重演方法）；（2）伪造真实性：主导的训练数据集FF++包含过去四年中过时的伪造技术。在这些伪造内容上“磨练技能”使得难以保证对当今最先进深度伪造的有效检测泛化能力；（3）评估协议：大多数检测工作仅对一种类型进行评估，例如仅在换脸类型上进行训练和测试，这阻碍了通用深度伪造检测器的发展。为了解决这一困境，我们构建了一个高度多样化且大规模的深度伪造检测数据集，名为DF40，包含40种不同的深度伪造技术（是FF++的10倍）。然后，我们使用4种标准评估协议和8种代表性检测方法进行了全面评估，总共进行了超过2000次评估。通过这些评估，我们从不同角度进行了广泛分析，得出了7个新的有洞察力的发现，为该领域做出了贡献。我们还提出了4个有价值但此前未被充分研究的研究问题，以启发未来的研究工作。"
    },
    links: {
      pdf: "https://proceedings.neurips.cc/paper_files/paper/2024/file/34239f60eca7ce9bee5280aaf81362d8-Paper-Datasets_and_Benchmarks_Track.pdf",
      code: "https://github.com/YZY-stack/DF40"
    },
    image: paper2024NeurIPSDF40,
    tags: ["Deepfake Detection Benchmark"]
  },
  {
    id: "p2024_2",
    title: {
      en: "Diffusionfake: Enhancing generalization in deepfake detection via guided stable diffusion",
      zh: "Diffusionfake：通过引导稳定扩散增强深度伪造检测的泛化能力"
    },
    authors: "K Sun, S Chen, T Yao, H Liu, X Sun, S Ding, R Ji",
    conference: "NeurIPS 2024",
    year: 2024,
    abstract: {
      en: "The rapid progress of Deepfake technology has made face swapping highly realistic, raising concerns about the malicious use of fabricated facial content. Existing methods often struggle to generalize to unseen domains due to the diverse nature of facial manipulations. In this paper, we revisit the generation process and identify a universal principle: Deepfake images inherently contain information from both source and target identities, while genuine faces maintain a consistent identity. Building upon this insight, we introduce DiffusionFake, a novel plug-and-play framework that reverses the generative process of face forgeries to enhance the generalization of detection models. DiffusionFake achieves this by injecting the features extracted by the detection model into a frozen pre-trained Stable Diffusion model, compelling it to reconstruct the corresponding target and source images. This guided reconstruction process constrains the detection network to capture the source and target related features to facilitate the reconstruction, thereby learning rich and disentangled representations that are more resilient to unseen forgeries. Extensive experiments demonstrate that DiffusionFake significantly improves cross-domain generalization of various detector architectures without introducing additional parameters during inference.",
      zh: "深度伪造技术的迅速发展使得换脸技术变得高度逼真，引发了人们对伪造面部内容恶意使用的担忧。现有的检测方法常常由于面部操作的多样性而难以泛化到未见领域。在本文中，我们重新审视了生成过程，并识别出一个普遍原则：深度伪造图像本质上同时包含源身份和目标身份的信息，而真实人脸则保持一致的身份。基于这一洞见，我们引入了DiffusionFake，这是一个新颖的即插即用框架，通过逆转人脸伪造的生成过程来增强检测模型的泛化能力。DiffusionFake通过将检测模型提取的特征注入到冻结的预训练Stable Diffusion模型中，使其重建相应的目标和源图像，从而实现这一目标。这种引导重建过程迫使检测网络捕捉与源和目标相关的特征以促进重建，从而学习到丰富且解耦的表示，这些表示对未见伪造内容更具鲁棒性。广泛的实验表明，DiffusionFake显著提高了各种检测器架构的跨域泛化能力，并且在推理过程中没有引入额外的参数。"
    },
    links: {
      pdf: "https://arxiv.org/pdf/2410.04372",
      code: "https://github.com/skJack/DiffusionFake"
    },
    image: paper2024DiffusionFake,
    tags: ["Deepfake Detection"]
  },
  {
    id: "p2024_3",
    title: {
      en: "Enhancing tampered text detection through frequency feature fusion and decomposition",
      zh: "通过频率特征融合和分解增强篡改文本检测"
    },
    authors: "Z Chen, S Chen, T Yao, K Sun, S Ding, X Lin, L Cao, R Ji",
    conference: "ECCV 2024",
    year: 2024,
    abstract: {
      en: "Document image tampering poses a grave risk to the veracity of information, with potential consequences ranging from misinformation dissemination to financial and identity fraud. Current detection methods use frequency information to uncover tampering that is invisible to the naked eye. However, these methods often fail to integrate this information effectively, thereby compromising RGB detection capabilities and missing the high-frequency details necessary to detect subtle tampering. To address these gaps, we introduce a Feature Fusion and Decomposition Network (FFDN) that combines a Visual Enhancement Module (VEM) with a Wavelet-like Frequency Enhancement (WFE). Specifically, the VEM makes tampering traces visible while preserving the integrity of original RGB features using zero-initialized convolutions. Meanwhile, the WFE decomposes the features to explicitly retain high-frequency details that are often overlooked during downsampling, focusing on small but critical tampering clues. Rigorous testing on the DocTamper dataset confirms FFDN’s preeminence, significantly outperforming existing state-ofthe-art methods in detecting tampering.",
      zh: "文档图像篡改对信息的真实性构成了严重威胁，其潜在后果包括错误信息传播、金融欺诈和身份盗窃等。现有的检测方法利用频率信息来发现肉眼难以察觉的篡改痕迹。然而，这些方法常常无法有效整合这些信息，从而削弱了RGB检测能力，并且遗漏了用于检测细微篡改所必需的高频细节。为了解决这些不足，我们引入了一种特征融合与分解网络（FFDN），它结合了视觉增强模块（VEM）和类似小波的频率增强（WFE）。具体而言，VEM通过零初始化卷积使篡改痕迹变得可见，同时保留原始RGB特征的完整性。与此同时，WFE分解特征以明确保留通常在下采样过程中被忽视的高频细节，专注于那些微小但关键的篡改线索。在DocTamper数据集上的严格测试证实了FFDN的卓越性能，其在检测篡改方面显著优于现有的最先进的方法。"
    },
    links: {
      pdf: "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/04834.pdf",
      code: "https://github.com/Rapisurazurite/FFDN"
    },
    image: paper2024ECCVFFDN,
    tags: ["Document Tamper Detection"]
  },
  {
    id: "p2022_1",
    title: {
      en: "End-to-end reconstruction-classification learning for face forgery detection",
      zh: "用于人脸伪造检测的端到端重建-分类学习"
    },
    authors: "J Cao, C Ma, T Yao, S Chen, S Ding, X Yang",
    conference: "CVPR 2022",
    year: 2022,
    abstract: {
      en: "Existing face forgery detectors mainly focus on specific forgery patterns like noise characteristics, local textures, or frequency statistics for forgery detection. This causes specialization of learned representations to known forgery patterns presented in the training set, and makes it difficult to detect forgeries with unknown patterns. In this paper, from a new perspective, we propose a forgery detection framework emphasizing the common compact representations of genuine faces based on reconstruction-classification learning. Reconstruction learning over real images enhances the learned representations to be aware of forgery patterns that are even unknown, while classification learning takes the charge of mining the essential discrepancy between real and fake images, facilitating the understanding of forgeries. To achieve better representations, instead of only using the encoder in reconstruction learning, we build bipartite graphs over the encoder and decoder features in a multi-scale fashion. We further exploit the reconstruction difference as guidance of forgery traces on the graph output as the final representation, which is fed into the classifier for forgery detection. The reconstruction and classification learning is optimized end-to-end. Extensive experiments on large-scale benchmark datasets demonstrate the superiority of the proposed method over state of the arts.",
      zh: "现有的面部伪造检测器主要关注特定的伪造模式，如噪声特征、局部纹理或频率统计，用于伪造检测。这使得学习到的表示对训练集中呈现的已知伪造模式产生专业化，从而难以检测具有未知模式的伪造。在本文中，从一个新的角度出发，我们提出了一个基于重建 - 分类学习的伪造检测框架，强调真实人脸的共同紧凑表示。对真实图像的重建学习增强了学习到的表示，使其能够感知甚至未知的伪造模式，而分类学习则负责挖掘真实图像和伪造图像之间的本质差异，促进对伪造内容的理解。为了获得更好的表示，我们不仅在重建学习中使用编码器，还在多尺度方式下在编码器和解码器特征之间构建二分图。我们进一步利用重建差异作为伪造痕迹的指导，将图输出作为最终表示，输入到分类器中进行伪造检测。重建和分类学习是端到端优化的。在大规模基准数据集上的广泛实验表明，所提出的方法优于现有的最先进方法。"
    },
    links: {
      pdf: "https://openaccess.thecvf.com/content/CVPR2022/papers/Cao_End-to-End_Reconstruction-Classification_Learning_for_Face_Forgery_Detection_CVPR_2022_paper.pdf",
      code: "https://github.com/VISION-SJTU/RECCE"
    },
    image: paper2022CVPRRECCE,
    tags: ["Face Forgery Detection", "Reconstruction"]
  },
  {
    id: "p2021_1",
    title: {
      en: "Local Relation Learning for Deepfake Detection",
      zh: "用于人脸伪造检测的局部关系学习"
    },
    authors: "S Chen, T Yao, Y Chen, S Ding, J Li, R Ji",
    conference: "AAAI 2021",
    year: 2021,
    abstract: {
      en: "With the rapid development of facial manipulation techniques, face forgery detection has received considerable attention in digital media forensics due to security concerns. Most existing methods formulate face forgery detection as a classification problem and utilize binary labels or manipulated region masks as supervision. However, without considering the correlation between local regions, these global supervisions are insufficient to learn a generalized feature and prone to overfitting. To address this issue, we propose a novel perspective of face forgery detection via local relation learning. Specifically, we propose a Multi-scale Patch Similarity Module (MPSM), which measures the similarity between features of local regions and forms a robust and generalized similarity pattern. Moreover, we propose an RGB-Frequency Attention Module (RFAM) to fuse information in both RGB and frequency domains for more comprehensive local feature representation, which further improves the reliability of the similarity pattern. Extensive experiments show that the proposed method consistently outperforms the state-of-the-arts on widely-used benchmarks. Furthermore, detailed visualization shows the robustness and interpretability of our method.",
      zh: "随着面部操作技术的迅速发展，由于安全问题，面部伪造检测在数字媒体取证中受到了相当多的关注。大多数现有方法将面部伪造检测表述为一个分类问题，并利用二元标签或操作区域掩码作为监督。然而，由于没有考虑局部区域之间的相关性，这些全局监督不足以学习泛化的特征，且容易过拟合。为了解决这一问题，我们提出了通过局部关系学习进行面部伪造检测的新视角。具体而言，我们提出了一个多尺度补丁相似性模块（MPSM），用于衡量局部区域特征之间的相似性，并形成一个稳健且泛化的相似性模式。此外，我们还提出了一个RGB-频率注意力模块（RFAM），以融合RGB域和频率域中的信息，实现更全面的局部特征表示，从而进一步提高相似性模式的可靠性。广泛的实验表明，所提出的方法在广泛使用的基准测试中始终优于现有的最先进方法。此外，详细的可视化展示了我们方法的稳健性和可解释性。"
    },
    links: {
      pdf: "https://arxiv.org/abs/2105.02577"
    },
    image: paper2021AAAILRL,
    tags: ["Deepfake Detection", "Local Relation Learning"]
  },
  {
    id: "p2020_1",
    title: {
      en: "Hadamard Matrix Guided Online Hashing",
      zh: "基于Hadamard矩阵的在线哈希"
    },
    authors: "M Lin, R Ji, H Liu, X Sun, S Chen, Q Tian",
    conference: "IJCV2020",
    year: 2020,
    abstract: {
      en: "Online image hashing has attracted increasing research attention recently, which receives large-scale data in a streaming manner to update the hash functions on-the-fly. Its key challenge lies in the difficulty of balancing the learning timeliness and model accuracy. To this end, most works follow a supervised setting, i.e., using class labels to boost the hashing performance, which defects in two aspects: First, strong constraints, e.g., orthogonal or similarity preserving, are used, which however are typically relaxed and lead to large accuracy drop. Second, large amounts of training batches are required to learn the up-to-date hash functions, which largely increase the learning complexity. To handle the above challenges, a novel supervised online hashing scheme termed Hadamard Matrix Guided Online Hashing (HMOH) is proposed in this paper. Our key innovation lies in introducing Hadamard matrix, which is an orthogonal binary matrix built via Sylvester method. In particular, to release the need of strong constraints, we regard each column of Hadamard matrix as the target code for each class label, which by nature satisfies several desired properties of hashing codes. To accelerate the online training, LSH is first adopted to align the lengths of target code and to-be-learned binary code. We then treat the learning of hash functions as a set of binary classification problems to fit the assigned target code. Finally, extensive experiments demonstrate the superior accuracy and efficiency of the proposed method over various state-of-the-art methods.",
      zh: "在线图像哈希技术最近受到了越来越多的研究关注，它以流的形式接收大规模数据，以便实时更新哈希函数。其关键挑战在于难以平衡学习的时效性和模型的准确性。为此，大多数研究遵循监督学习的设置，即使用类别标签来提升哈希性能，但这种方法存在两个缺陷：首先，使用了强约束条件（例如正交性或保持相似性），然而这些约束通常会被放松，从而导致准确性的大幅下降；其次，需要大量的训练批次来学习最新的哈希函数，这大大增加了学习的复杂性。为了应对上述挑战，本文提出了一种新颖的监督在线哈希方案，称为基于Hadamard矩阵引导的在线哈希（HMOH）。我们的关键创新在于引入了Hadamard矩阵，这是一种通过Sylvester方法构建的正交二进制矩阵。具体而言，为了消除强约束的需求，我们将Hadamard矩阵的每一列视为每个类别标签的目标代码，这本质上满足了哈希代码的几个期望属性。为了加速在线训练，我们首先采用局部敏感哈希（LSH）来对齐目标代码和待学习二进制代码的长度。然后，我们将哈希函数的学习视为一组二分类问题，以适应分配的目标代码。最后，广泛的实验表明，所提出的方法在准确性与效率方面优于各种最先进的方法。"
    },
    links: {
      pdf: "https://arxiv.org/pdf/1905.04454",
      code: "https://github.com/lmbxmu/mycode"
    },
    image: paper2020IJCVHMOH,
    tags: ["Image Retrieval", "Hashing"]
  },
  {
    id: "p2020_2",
    title: {
      en: "Similarity-preserving linkage hashing for online image retrieval",
      zh: "用于在线图像检索的相似性保持链接哈希"
    },
    authors: "M Lin, R Ji, S Chen, X Sun, CW Lin",
    conference: "TIP 2020",
    year: 2020,
    abstract: {
      en: "Online image hashing aims to update hash functions on-the-fly along with newly arriving data streams, which has found broad applications in computer vision and beyond. To this end, most existing methods update hash functions simply using discrete labels or pairwise similarity to explore intra-class relationships, which, however, often deteriorates search performance when facing a domain gap or semantic shift. One reason is that they ignore the particular semantic relationships among different classes, which should be taken into account in updating hash functions. Besides, the common characteristics between the label vectors (can be regarded as a sort of binary codes) and to-be-learned binary hash codes have left unexploited. In this paper, we present a novel online hashing method, termed Similarity Preserving Linkage Hashing (SPLH), which not only utilizes pairwise similarity to learn the intra-class relationships, but also fully exploits a latent linkage space to capture the inter-class relationships and the common characteristics between label vectors and to-be-learned hash codes. Specifically, SPLH first maps the independent discrete label vectors and binary hash codes into a linkage space, through which the relative semantic distance between data points can be assessed precisely. As a result, the pairwise similarities within the newly arriving data stream are exploited to learn the latent semantic space to benefit binary code learning. To learn the model parameters effectively, we further propose an alternating optimization algorithm. Extensive experiments conducted on three widely-used datasets demonstrate the superior performance of SPLH over several state-of-the-art online hashing methods.",
      zh: "在线图像哈希旨在随着新数据流的到达实时更新哈希函数，已在计算机视觉及其他领域得到了广泛应用。然而，大多数现有方法仅通过离散标签或成对相似性来更新哈希函数，以探索类内关系，这在面对域差距或语义偏移时往往会降低搜索性能。原因之一是它们忽略了不同类别之间的特定语义关系，而这些关系在更新哈希函数时应当被考虑。此外，标签向量（可以被视为一种二进制码）与待学习的二进制哈希码之间的共同特征尚未被充分利用。在本文中，我们提出了一种新颖的在线哈希方法，称为保持相似性的链接哈希（SPLH），它不仅利用成对相似性来学习类内关系，还充分利用了一个潜在的链接空间来捕捉类间关系以及标签向量与待学习哈希码之间的共同特征。具体而言，SPLH首先将独立的离散标签向量和二进制哈希码映射到一个链接空间，通过该空间可以精确评估数据点之间的相对语义距离。因此，新到达数据流中的成对相似性被利用来学习潜在的语义空间，以促进二进制码的学习。为了有效地学习模型参数，我们进一步提出了一种交替优化算法。在三个广泛使用的数据集上进行的大量实验表明，SPLH在性能上优于几种最先进的在线哈希方法。"
    },
    links: {
      pdf: "https://www.ee.nthu.edu.tw/cwlin/pub/tip_hashing_2020.pdf",
    },
    image: paper2020TIPSOH,
    tags: ["Image Retrieval", "Hashing"]
  }
];

export const awards = [
  {
    id: 1,
    title: {
      en: "Second Place, Video Generation Method Recognition Track",
      zh: "视频生成方法识别赛道亚军"
    },
    authors: "S Chen, Z Sun, B Yin, T Yao",
    organization: "The 4th China AI Competition",
    year: 2023,
    abstract: {
      en: "",
      zh: ""
    },
    links: {
      website: "https://ai.xm.gov.cn/competition/project-detail.html?id=45a538a0e9e248c29a03c2b8aa66361b&competeId=2022c40dbb2347fba8b3c9a6294efa5b",
    }
  },
  {
    id: 2,
    title: {
      en: "First Place, Deepfake Attribution Challenge",
      zh: "深度伪造溯源挑战赛冠军"
    },
    authors: "S Chen, Z Sun, J Cao, T Yao",
    organization: "AISC 2022",
    year: 2022,
    abstract: {
      en: "",
      zh: ""
    },
    links: {
      website: "https://compete.zgc-aisc.com/activity/1/format",
    }
  },
  {
    id: 3,
    title: {
      en: "Third Place, Track 1: Forgery Image Detection of ForgeryNet Challenge",
      zh: "ForgeryNet挑战赛-伪造图像检测赛道季军"
    },
    authors: "S Chen, Y Chen",
    organization: "ICCV 2021",
    year: 2021,
    abstract: {
      en: "",
      zh: ""
    },
    links: {
      website: "https://competitions.codalab.org/competitions/33386",
    }
  },
  {
    id: 4,
    title: {
      en: "Second Place, Track 2: Forgery Video Detection of ForgeryNet Challenge",
      zh: "ForgeryNet挑战赛-伪造视频检测赛道亚军"
    },
    authors: "Y Chen, S Chen",
    organization: "ICCV 2021",
    year: 2021,
    abstract: {
      en: "",
      zh: ""
    },
    links: {
      website: "https://competitions.codalab.org/competitions/33386",
    }
  },
  {
    id: 5,
    title: {
      en: "Second Place, 3D High-Fidelity Mask Attack Detection Challenge",
      zh: "3D 高保真面具攻击检测挑战赛亚军"
    },
    authors: "S Chen, K Zhang, Y Chen, T Yao",
    organization: "ICCV 2021",
    year: 2021,
    abstract: {
      en: "",
      zh: ""
    },
    links: {
      website: "https://competitions.codalab.org/competitions/30910",
    }
  },
  {
    id: 6,
    title: {
      en: "Gold Medal, Deepfake Detection Challenge",
      zh: "Deepfake 检测挑战赛金牌"
    },
    authors: "S Chen, K Sun, H Liu, T Yao",
    organization: "Kaggle 2019",
    year: 2019,
    abstract: {
      en: "Identify videos with facial or voice manipulations",
      zh: "识别包含面部或语音操作的视频"
    },
    links: {
      website: "https://www.kaggle.com/c/deepfake-detection-challenge",
    }
  }
];

export const services = [
  {
    id: 1,
    role: {
      en: "Conference Reviewer",
      zh: "会议审稿人"
    },
    items: ["CVPR", "ICCV", "ECCV", "NeurIPS", "ICLR", "AAAI"]
  },
  {
    id: 2,
    role: {
      en: "Journal Reviewer",
      zh: "期刊审稿人"
    },
    items: ["TPAMI", "IJCV", "TIP", "TIFS"]
  }
];
