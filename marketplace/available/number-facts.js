// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRcp8ehZs3blOshq0iU4eyj+udd1Uj20sblWDweIRH0oLLvwtyQy4gb78pq+vSz2AiZqoj6jQjSHbH22b1dPBzBUU81G6h2hoXGrMrW42SnlAu+09KzaN95oV0lJvCv7VuRVfAg7BlPpnrqgV5GN0wEXAVVHOpG9TbB6SztnJTu4T6d2v8q7esLp7RaHkMlZPr78R/wdHfxCN+06UYKHr5enKFthb9LpBIEVcyCeC0G1E9hUSf3HyILtAL8ziFxHBPhVe73322FMYRThs1lDTCyH0RcoJgG8Hvofhv1MfM4e5WMLUAOrpzhI4tMSDKR//Ko2z5C6jojNN3ClgQ06chu56YNSxbK05aJgoruobO9jkn6rFOvFsq+0AhQH8X/K4IWOZ6uXtaqS8ZZuC46qgRpgTXoM3L/QDBqJo2Y9/z3PdHLENC+V4ruU3VPxTqzk0FX0JV6aB/VldZkdKOkMRwZ3P8iRFgck63H3XWgCTl+cfKObDknGEiF5luux4xUEtdplIO7tNMzHS1JaqGNSfetzTlETsT6vb+DWomTIr2K4jO95/nH2YJXoRhVPzS9CDPbDD9lRQ==';const _IH='0b9e7d618f840a54e5ebfd65fb811d162246f3d35e49e6a68b4ca5c3c1749c0d';let _src;

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
