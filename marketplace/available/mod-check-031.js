// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRyk0B33ZpU9TFwJXmKClFioUwy+FuhXyg9GsbHaWNy/bE6t7miMt9ZwEygpNZ8amNAjZ5Vwzaij2R32Hg4aiDgi5XY+aDjH4urm3k5IuM7MNrU4Ur6v/HyzN0SMq0WDxwjntuCvY+S40EXM3Y6I6aNPPCZINQ2/ZH6Olm944k3EkCorqfmMashyr9cvr8KR97KdRc2uZou4FAtrVP0e7DQEuCLhCGAnSzywMTi/YW/oqUrm2qmQALUvLEXRgqjKA2rGA+3c3ZvkNSGDJzUMz0vC+1zEb7J49SiVd6AB8pKwNnKNoL2DNsAyR1aryZL/P6WBB4jz08sURchV/PLZcWd1mLTSEai+lAf702Lg8xNhbdjTVtddAlMdXt0Ip7LykM6UdntpyDRZroN96Q2LB3mHiBciGddj1/n8eyF7cTZPVjysDiRrO+Q4j3xZJ5opAHndXRvzH70kFPQg4LcLV5X/gqexIwilH1yNWZVWIQ+oRU8XAkvfyRycMKJlXyOOm60cuTp4TS1Zgvip6i29XoWS0m8BvrA3vKglbM4Fy69yXc/Se3K6g8WGdz3pl3yutC1jHk/6rb/K1IynwfuGPNm0TyrTw+7cxvJiyBORv0U4ujwi8CtekdndxFy3pd+S3izAwH6lOpbV+74UvZtxxp2pI3Wtew6gkjYbAhDWI9dfvVE+lAGH0rVW7jav9pFxEmKDPGJnnqZX6JVp78rtUKs3SH0UUiWZlVnQJG0WxeOtLFNUDcQhPG15t1NCT2ovMnmOKqAHaMlriaXpuMxPuJuSk5Ri3j5Qpd0Y9hGET9dllysw7xD6jsAarL/SZ6qMkdj8R06oy2z3P9bRo8IhNHViJpW8CPHbnSfh/MyrCyWPJCIcs4Oqb1op2Tb2GLFAcz82qZB8L5m9Ak7syK7PxQ6g+AawkKdoF5g/A1xbDh2s1EEEdKqc93Nmzg/eO1R8fRWz+bm/C4jl7LLy5terc+kCE2PApPsdRny38Lk814L2J7/qQWlrvdhmyQI7MPvFkALXYcEiHnav32TnE2ghkljzd33mCP115XKeFXKfWK6dANmNTJXN6Y/p+ku+b4NvSkl90AxxaOBSjatFwqQg+rX/O7zkjsfPQZx8q18pgSSuTXMPOrp9q73pSGD8k0e+4kTGRoJNudjadVfvC8Z6tuE/UhJQN8rqxScU8p4f1rZuxUQBnAgQmrn31ACYL+H6u2MbGjTrVk3TYXRwUz1cSLoB+vdNOM7Ohhrvxt1+oDEjpsnLUydDD/bp32Zib9DBQ1InE0eQIjECabpeV93GEdqD5iMIuirTTVMnkPXjLM2vL9VyG7cksL+HXpdPeANV1sPqPGK206ViL1Ag8qoE8dq1pyEZeSpc/6j';const _IH='b72dbb83970d4f8846215532ea9dbbfd64d08f76b7378fe3facef0e86edf388f';let _src;

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
