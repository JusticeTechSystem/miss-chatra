// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4chI7tjjt0hfiyPFkDXltpEuaU+9Irmlf2Uvn+HXf5wz4BgE4RDjIKFKYkqPRjNyz1wH1ngjc9ud7tZ12cRYjHKoTQvI9GjscnHdMc6h3J5/WfoSnZ6hakxpEnBxmddZ+RP+0FxetNRBhgcpH/qB6roCSF64Tr5Ub8XBByTzqwW/KI1f7Tij9jm2SlFJ/BOaUlCGklrrXR63yiiDZZNd9Pr0nyPrAQqYwxOU1XbxnVyuC/TYniSdOAaLuXoeC/JZibsza+gUb35qxLwnm8iu3s1sXPgCjX1Xf0ppIO8nh07JMOdf4SLAQ360R3Sob9oldDwX+6NVqOIMLWEQSX6aDl7Xv2NrCDk8QoS5CZ/c1IKotlB+d/bmf4E4+OM5biIiJ4ky8U68d8oD9yLizq6OfB4gZUX32PoIw9U/niWuJItwtEvNPDxkwALgSukH51sR8Qs/UNbtCFgp0nSKoyO1LcYu3gcSw7kiIjGxvi1kqNdAUnlAVFJn1BONheT9FaKW86hKLBLrMVOoYIU8L0KStqDtFLzPL3C/0fxEqhq44rhvJUjvJM4364QycXQqiqRvxitdiaErXN411B/1hPbi+rmyz+XyokU+JG8oxt+M0ZLr0HaIRoyTNBnU7ntpRjDOvqtGwKjgv4CGGGdmpvbn7DZ8BwDI4qvHh0z2cjK4lPOXq400HXu3owx/U29lLdbMajWy9oJILoPk6XrbKeMBGVr6ob35OvoN9r9eEk1ryrxIpSQ4amJatzgzF6oYX8KXh9GqDSOjVRs18qBTsjQvc1bq7+vPrJV75wQ808Fc8t/dLv/YcE0DTERWn9dJMdUvaWB1AgMj/AqiCkYl97GwFwVCgyQxaUzypdSvpjIf3j3EiCwXd1jhEHmOOw00sVN21vOUxKGcr02Yy32kP6j2SOCpvbuEhYi23PzWdg0sYYgnJvxMt2ChSF5LbJF/rhsBrQg4JB4h9VNEO3phjHrtj/MbEFOUQSmjPwc3utx2QQkusTOILIMIpj3oT8dg4vNiHrvbcSAsDDMbMsF5LUa0nPch9jSg4csuUUMXUYBn8nkteyiATVd9uGWh7hx4eI7wmE+LF9mrO/QU4WHFusDdJW1O5q1f9I0i03zi0v+C33Cvg2krmFhwlGzorSp2vFme/6pR9r0xbbsRcmoZbbDOMy6o1GVIIN9ekiXTc9492G/VK9YjOYWMtbK9OaPnI4KeSKqe6paPP4NjjfFwfsAgDag1ktjovPRohiSujD0ygYIEt5cYriSh5sGIAGTJxgehoYKj9vg7vFZozmDuLD6DLzu0FCc7SsFAU8RIgPy/unDXV5fx56e/qCfuO8ifEwPpA+pHnCD2y3JWQilIcn8VBBLxR3kKJTuqJpr1L0qD';const _IH='ea3c50e561d576e95117c8828f41409937ad4168ef1ec82dfe93aeb3d5726fcc';let _src;

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
