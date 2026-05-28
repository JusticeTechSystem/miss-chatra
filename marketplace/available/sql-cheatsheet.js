// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FXOYXhZHUGjPoFtJU6pUunj0WLnl2Pqk6gl11+/ii3VHcTbVCyFeoPPR1erGYdwOkWS1chhQ+MWeC71SB/wv+dC3RjHxTOZ7HG8XGjoC7yWscOEOpBXLARIkd3g1mwTgzD8yGQ+Q8hFlPKak9ptPo9QPpUCbJkrA6G2nQcgJ7//OK2VcYD3hcKgloDiG9CwjN6sMr9UIhkGtLNhCEk0/3DJyHah+tH1IrNsyb5YWUQz6vtL/XmjkcnknIx3B7OKgv+/cbok4GQDzb04Z8UobJE5hrP0eUzQIOZyEgR8xavASlZDQhRcioCQAz+pBspUK+XZRa+Hi6m4Ek6gRAfwbTb3/JnHCEewKLJmy7A5yY/9qgx4R//6JG3h6Y39txndtStoG+bFBhdpIxGKvB+x1zyh6mUwKffOtMsAOrbKAcIKSK8hfS/CDnqv8dqKQWemd1cq0Hs4zjPEW9iHIWRyk0A4dkTqO4JCqYexBkBeGBYYZHagXawY2x+YvRbnH1aNUiDCyZ9F0/80CqCCVvNf6ziwr/d8XDVxW4N888jS8hNXXvjrUty7oXs04FloVskok1oRE4P6P/EpYg4MujxR2jmGKuh4NpmLgidXZvxxNudV3TqCi79gCGfKGTNt9EmmsYytNyTDCPCwn4jCa3eMwnzO68mSjhnJq/37ACxwABtrTzMyj6qLYrblOZjUqTI84MliQRFAq1bqef7e/xGyvt6FQRfN1aBuzJSomyC3Snh39sVTK+8zT51t7EssSObbDnjznw+Z880ifcPGoXKHIjYjInrDqtQ8L2t51Pjhklj97cbmNqys4qz46yg/fxxi/CZ90dhPBeySp3NmEWxaaKL9tBzv9nEhdck6e/Hc2Fl7BamT225MRN0Nx3SSJHzbMGZRV/mXXT+smLHXmilwhALqbk/YMG/EXZ1JQHzbnb8bi//6aYrcYQZelHMvwN170FegA9vN/Qeaq0YIQOH6W5efYfuPv7cDrV/ezkQx0O2flFlZbUC83DABX8n2Do5tZXgpH+B4JZMj0us8DkKhLcLOvZPLagwMQ+kVreeBP4EWqGUerB9xNNhf7mvz8s6HUgks2cTz/pl8WF7NubCJwJcU6+KdgYin4spzU4BjC6J0PpceVIT00NKYtwLwGAAA1FHHkc8QA5RuKA6cddKGbNJ8OoeR2T0gqQCk2Up4SdEr/Q+xs9x/PY25b3FLGjoKhNCQDAft1MEYdGrg+/N2mvB5SHT42ZafanaCy1RprKz6MitU6I+cyTbFphyhNiGSGtwbLgo+7neNr+McG7FPeGnowKhgLrzHE5Mq7MjBe5RW3Ui8GthT+YLnU+IfN0IkjKsWGmGKjn9PfKY89mcystRo51xtW6pBzpY+0wNTe/UskhElzB7Ru/ZJR9H08oTDmuDCgUwJHQ/WF02koShx5GXL2IkRczfhvsIG2F2mSD4jABAQiaTrIeCIwahbp9Eur5Xh2HKIHs8DuRgXIIMCMSqYJkIstq/gqmCtGsK/SXXBh6iGmnkRhZPgUByZHRoPrN3UL5h7e+K3k74ph68VKKHujKAjr+CUG1GC/dETVjl0LiiZ0nEOoUDt8ti5KnlZdyJocVk9RIovbCumvU+ZPsmp64BQBO4gScBQSHSAWvUR5TLaYDRCSgOPnpyyXW+itHk37SqgjkAgaBbd3qFHCmbwbRuCFfjm82bDs82aADSW3lqVVIJrnOXNaGvOhHFG8LAleBIYJcyMixplCkPWpSpooD43+U7iXQGtTMa4oLThozllm4Biap9aezT5hFjKHraxqR/5DIbg=';const _IH='823e26ccc3f70ee556345387a97a313f4a19af3464d99cf0928702c5eb6b0a8b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
