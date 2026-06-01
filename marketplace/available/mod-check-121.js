// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+8WsyIHmt7zdvawJeuwXgBITC9tnWnz1QKCZkYSrpGBrUyBy+Pgq6QbHKWfkaKew2Vv/rbL2yuRGFblI07G1zgH030JURfRBUGRBZI+CODnJdoYEu3MDQg0Be1EdtIYwTHtvvID183Ml05f5WAmdQTm58m4Sx/fqlq8px6XbL6iYAWflDkIAjEA9tWVsXevy9cCHRkhCsP+mFvKZGOvvz1Y3pYgjgn5uqgTPHKQA0TPk7fHvg5NdnPH2Z2/YfuOXKo887ROwlsEmc4f234bPbJL02ACSrVhbReOAqTOxJqwUh7FYXfWim6tllPgMrm9h2FKweXnqNXRrdYQ4lDcV+qW7w1wERVwvSRdb4OL5G8wQ8BJIOPa/XPHrhvqRZXN37SCYONU/9WdGishbtNPuF/T3PlbavrY7HzGiqF1r31r8UjsWjZqycx3tl27FzWRFNKxSyEwP79uNzD58UohYBXJqX7lqJ8Kw0YXU9+/g394h53Elj6OL2/8PWrcwZDuj2jMejYhpZhkT1zO/7rgVq2IRw/ZYPWi/aGcT0Qhx6s7Og3GtZAXFEcRxnCGDCZs5OScGBoUuDTMtAvmeKDC4OYnmmS1jb5gQmj6COR3p1oXdYxJpaxiYAHJ+aq9eqNMdbRbSa/zGVDnkuJH/hhLZSu2EnXEfj8Asw6Fsf21xVwFW1930pb9PhbbFPydZwVwCUhiTodQ2mqXsfrgVO/nXxwx0DV/tj2fF7oOHAArTCZdFW7NMx7QzAf14p+wLy98qZjbmMc2iV2HszbPExQEOwGXMEUMcbxFYbfI8kPj6JwnHLNZAmWj0YRoUphiqInE0IOM3fkLBoPIUhzEzucNuDejw2fhBaai9rZDF+6+tAfaqfMEEoTw/5o/1RduZZCdINs9d0PKvO0FtkCXygl6eyERCtkllljQE7NslPGDJk3s980WexxVfok4uy/QZmc/O46T3+v2nmdHNF74j7I7FJec5B9PJ0ta5RkU/DpBhMNjITXbgl8+B2BZ6kZIdOXPVIb/nS4JBrUa10MhtCcO1q4gWpNBsXvMI36rCu2Z4vNHRUrTSFjkmz8h6Q5v+uIj5uywpvIyQSgIzZcHJYpXaI029lEO9TzHdiWLb3CsoTdmaJL6jD13Rn5vymtmcsc/nkLJr/N6hWxAvF+HuqDOTuO8Dmi8PrsXzJRuNgyMYSwk8kcMul/sC9xKZnR933qAzr0+LQQrAcA5Q4Q+TFzZjxg4+ppWWVjI2pNxpGyBP/0xQ6LRPe5tky4WXaLrOr8bI64yhQ7Jh/Li2KQG5jiVyC3LIL9RAQ9WwLb9c+OLTgnMMPnUoF1+isiQpsUanvjO59oYH9ILiJECeO54zmF7CvGoZSRQoMpcE+oOVU6FaA==';const _IH='bec2f4b4f9dd4e58628dd93de3cd5b073d659c79c2c376a616a7180d02eb1bfc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
