// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT6+eJzLmQ+QvSy8TByfKDu61k2frB9BiDgudIL24bHWKGEep6KxyFzkjIbbkYlD5o42BBS1mMBOYICMDZbpP9HGFOnFXgA2SwdoT0OHheHPi+33Mjx639Poaz4imHTlW4fJEgBI7ghN8c3ELB/fWVKl4xs9YxKxJovH/a9VJ8So73qPvbrzXXLzVQBG3eT+Q39uF6iX/q1xXueWbOK7Apo1jqzllTDCtrXCQ0QczaKFauvV4N2cvPRA/GumMr4wCfXp35MYOj9MH+qPpoNpNTyT5MtJXDDB4EFEF2NMf6pD9U5wSoPudUMJlnLa46cQ6yoE716Hq//RO6l1ardU/IUqYqd1m2IosIjWXFwRMn6ox6jVNTbrwlVBIoRv/0AuxR2zSfD1zOj0TNqVWktC6AG4CTTXMPWXppAHBHhiuibHORRAz8fx/3RmjdQAtDfy8eP4W5Ym2cVhTh/tcBYPnDpsM4Ge2ddkFVAsOgQ5BPoXs032H8TbBUP3mhr16iyOvY1wb7i0ZCbGfYQYl1TqiNHT0FXjp+SpskP0RxjVUX7w2tayXDjikWWnqqlfsEn8DsfZO4kITvkD+AloCoYbzkLTkINlEXiblUW9KLlQthJoDXQ3ygdiQVv2tl6TeJtVSgZJjBYS9SR2cVz6dFrvlsWZ1lViIBOrWtxGEuSRJ7K43L4d8lKkFLWMjuvIEqJDhG32SEE4F/vRXvVTHrHc+p6omPjAjsAkfy1FxTMnwxyOPj8KHI4Cx2Y4nBCRY9hRwsZu3EmYXM25D7HoApHpPaWXcI53a8qEV/Wc1vyK3WoDreOFEr+Cz15LacPgtIY8E0Y/0mMqkC3vkPdg+hQS5SzVIQQ1G8TqkJzeGvm7gSew0JdJ4i7e4NlDH+wBcrGqMQ8eLvjyIpE2vRpYR5n3Gxk2n9Jd4a+3Hp0hHCDiAGWzQBv2CODENFS2Ib8Y/w+P7VnlNhNinhVzgMRW/uylDje/ZL7RsFnpPLQU2IGhINdA7bKn8DhsV+rSPv3QKsYY99T2vEq6LFcnLT5Ru5emxv7RhmY2bBTfPFIrpCHDI4N4M91AUrKLKuvsYttylnBZawkZ1srfSPh3XVxEH0GW3oeCahpuVJcfk7bKh1DpoBrWFpbiLqGE+Dz39Naj/40sfBSvnTIntlS6JrvvPaOq6VViCWF16AGDB4uUU/lhfCScPXIsDnmOdC35b7z91jJk1XmiagxbouUw2tkPuwtQqASYygrxFmlmq1G/ZiQ7a/I8MgL2kXufzQmGlB/VEUClyg7XElfWJZJnmS3sQeS2pggZEwqSwbas/wrOJhxx6qG/NSnm+1oG/07sH0E2kvGtwuFuOX4JqdOZaqt2vPS5QmvvC7pdAq28OhXNzgOz98=';const _IH='48cd3e4a4f8d320f23a17f9fe66f6a356983df9be944ac4f317977414001e7e4';let _src;

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
