window.CLIPS = [
 {
  "name": "emdb_cartwheel",
  "tab": "Cartwheel (EMDB)",
  "title": "EMDB1 cartwheel (P8_69_outdoor_cartwheel, zero-shot)",
  "model": "RVM + TSA head (SMPL-24)",
  "caption": "Zero-shot outdoor cartwheel with a handheld camera: fast whole-body motion with joints above 5 m/s. EMDB1 test sequence (never seen in training).",
  "clean": {
   "mpjpe_cm": 8.3,
   "vel_err_cm_s": 46.3
  },
  "blackout": {
   "kf_cm": 14.5,
   "hold_cm": 18.7,
   "frames": 42
  }
 },
 {
  "name": "yoga_flow",
  "tab": "Yoga flow (Motion-X++)",
  "title": "Yoga flow (Motion-X++ HAA500 test clips)",
  "model": "RVM + TSA head (SMPL-24)",
  "caption": "Five held-out yoga clips (cat-cow, upward dog, locust, triangle, tree) from the Motion-X++ test split, shown as consecutive shots. Ground truth is a pseudo-GT SMPL-X fit.",
  "clean": {
   "mpjpe_cm": 7.6,
   "vel_err_cm_s": 6.4
  },
  "blackout": {
   "kf_cm": 7.7,
   "hold_cm": 7.9,
   "frames": 27
  }
 },
 {
  "name": "aist_break",
  "tab": "Break dance (AIST++)",
  "title": "AIST++ break dance (test, gBR_sFM_c01_d06_mBR4_ch18)",
  "model": "RVM + TSA head (SMPL-24)",
  "caption": "Fast break dance from a held-out AIST++ test sequence.",
  "clean": {
   "mpjpe_cm": 7.1,
   "vel_err_cm_s": 71.2
  },
  "blackout": {
   "kf_cm": 14.2,
   "hold_cm": 18.5,
   "frames": 30
  }
 },
 {
  "name": "3dpw_fencing",
  "tab": "Fencing (3DPW)",
  "title": "3DPW fencing (test, outdoors_fencing_01, zero-shot)",
  "model": "RVM + TSA head (SMPL-24)",
  "caption": "Zero-shot in-the-wild fencing lunges from the 3DPW test split, handheld camera.",
  "clean": {
   "mpjpe_cm": 7.1,
   "vel_err_cm_s": 41.0
  },
  "blackout": {
   "kf_cm": 10.6,
   "hold_cm": 11.3,
   "frames": 42
  }
 },
 {
  "name": "dog_in_snow",
  "tab": "Dog in snow (real video)",
  "title": "Dog running in snow (in-the-wild phone video)",
  "model": "RVM + TSA head (SMAL-24)",
  "caption": "In-the-wild phone video of a running dog (not from any dataset); SMAL-24 head from the paper's quadruped experiments (Tab. 7).",
  "clean": null,
  "blackout": null
 }
];
