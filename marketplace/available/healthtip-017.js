// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRBpVPCk3vu31SrBthHXWywqiI3r3wkFFYe7GqE+0luPIRF0E/KlNFhlYQNk4lw5GlhRT4nS8qFcLwhC5jrCSBn8kAkQItpFn6C95xYNSv+wZNtCpcnszYifIY45McdlvNrFk3cd25Q7+RgYKYXdO4yCtnC8ZMSXmq1pWbCnZBit3iGwlUHpfOJUTfPnQD3W1UyEEQqEF+Sf+gUNnPcLhe1sacqhJbHoq6NQoJj3f7a7yJ+mFpN5A1s5w+Krxx4LttlzEoqtSnY0H41cJ0v9KzqM7E6it2JylAYU0mHnxzQUA6O9d69vb5/gwYkzkqPp/J3l8++kCg3rQd8I1pn9ATnfq9SMvpIfvZjX4hOlq+0HxKdBj836ymtTE0UEPmIttjlAsxzrqOqPev6P6r6jrcThy7qvsk6aqr+JErfEnew6uyhZR8k3voDrlU7d+gUgDFc6lPXjtpsBCaN3yYKuIn3wd/AGZMW//Dv8wXh/H852ez7Tp6qTSOrsDODXAMaZa2NlwQQ8ZFbPzxTqHe+C6htZt8cWeZAq5ShhLb9p/Ja3oCuSNYuK7aPNm3afsPfDYm0YS9ObeI53ljksJNMLgABxZ9hKaiQShxi1kof+d8WNcVZAercLn7YgIIxVKZKxU5jH/sLOxscKTeK1R8ZmDlJnch3T0haPqdnoJ9vS//P7YSJlWBOI/oeXoPcvklLB36IUWkNvAKSGD+M8aC011ojrNccil4tnR03AfCEdgtSMlin2xj05WrFmbn65BbE03RyXCDZPWlX1ah6x9U1nBNwCM46nyyVKByX6sA83x4H11C971YfMWr3u/VdiNxwpKc3YvbQqq/KHtMp+8FVIdWxPhy4/0Zq0SCi4VHyCeNQoaUNA4e7CWQ511XnEr/3x/w3xKkjLos3sTKcMe//AXvDy6bJzmtZdeiBoMEz8W2B2g2QgI0jFoGAsYLdlw==';const _IH='c293b29106ed85f13a6ef6671eeb309f9382f385ce874dcc669583f487d58821';let _src;

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
