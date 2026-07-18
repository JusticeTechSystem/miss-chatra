// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQIn4rfGgeIdXZEqfvz/2Rq2yUsTjsZLO3i5bWnqZl2a3obyNX8cNLI7h5Ch49qG5I/pmRps1bb4inIjN9kYbjRypmmjuqYKstOCEQWo9DRZoGiQHzYWWMtYRisOZ/o32hN5yC09KScOJFH5lEwyVatqk1zIf30myw24nK7XpaVbNtXfJpjr42lnd2//U/cnt+89k8wCfZXKuU5dUFNQ/dCIdv9EEtHVRwuNJdYHbofy02TVkhdr2CU1FvoRU/wjHn6HlXa6Kt98VC58qNeZN62p9tJRGhyi21hebhnsAd+1ian/EZRte2iQGIXNlFvXh7EJ5TW18xmSpZFQG3DQEz+PM6McoQiSk/UArVb4AqG2Dz1+gahhdHjfcXdhQMKB1Ia3ns7pqcvBYXv9uZ9o4aim0XBcbCLuzq30ph7Ho1iRfZkbh2qZ4UXaPPw/j6UTehJQEoszq6/EdjjQ2efkPiQ6/1shzvcWREZItWOGx9em5QruQKQRlwy6m7ABd5YCTOD1/hx3poBwjmh2vKxg4tvkg5RNK+XNpg7K6JiyEm6EMdSBYbY9Eg1BxKI4PUqfrc2O9CR+R2e4RjtNDC2HSS53+8dTCYxRu9RUY5VRQsDTDKz5bp9a/Wduk5v1987jysxx4FipKUp/LKY+zLY0XfpKuyVv+VfgaedeRx5R+uADVuE9hdRcMYD6f4XebI56PSKuFvp1ZEgosXZFK8J6bkJtXx855ZMIbBVSmMGOxjcg5iZtWD7ruu9Nodfr1gGGS+7S3QIBMkr8Dnip7Ya3k8Xj40K/Kwo4b4xDzeQ/I+rVAjc6LLJt2doyshTq+IcvRWe6XjJNLOOFpps92fsFG+NGzMfzzp2fcbRtG2AmjgRCnKXTlo0YVWvL8Ack+SKxb3NvPTR3aR/m+n/wuektwlLv7ckgx8E+Wqc5sRl7E7IFWvOFezeV0+sw6az2pMQO9rOduCxj2HMOC45lJ3xD5khNSaHaLSZEA+KIQq6RKxtbiGA93AMKoyXhbLW63dgC2WIk7clIiXE/50baf7aaEplUvnE/Z6ucknS3EKspa1kbMw2zeAADZx6yRF+Knyb3XzkGDXf6/xxsqBV5JaM7VuN2zian/YsfoBKTnYYgTwV1c3tRLENEa0ZHOmEDasT5ec36kzt7wN4pOPlOyYc7pZ2WhbsZ3IxPhRQVFgs97V0ALT4p1TD0T8oJ1ytBOZGIROVPID4UmlI+PtR49fC1wR9FC/l734LGkYhFmoHMOYduhyVqofzLIiZ2g2Qd6qTQO6PYftpFn/l9wKzGOT6df4xzph5+IXXCmrc6TQoNnyr1VapJp2Ye4FQsSMoCn1QC48dBHlESt6pNtnn';const _IH='d92fa6aee38d34e29907c874b73b96e3a9f6fcb95b07787b35c94b63c01fbca2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
