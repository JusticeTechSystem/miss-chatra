// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mad8Gwva79oWqt83HHyvWkS1d4COKgDXsyd+41fnrYEQ/u/R2nYdb/yWnXOQyLoKc/H1cdmF4hHuFnzBhh28UTofbzA34kb53C50cur4ymjoaf/phDQy7oRorDrLKnYJ3QtVipSeud7y3Php8U1fICTKQZdciXntKXdcS6u3UyV/XEHVSBssI84e02cJ0fOtBkMyG95YmOza7f//f8JjoGVoj2EjZkcqbKAg5L5IbATdM/sNsTSQQ4cIUei6YtnzMeBuwi1SJKFvADFbXRQoLyBiu7VfnRdVwoaBQoZ6gWU45VQKqmRDfL5MxknO662Z6KoTfXVrNNOGqhCa17SZ+QIj4HKverVtWPYUKxtIgpM0Yhesv/H+raSiNB8wBYCW5Qma1ZxaZI3L38chQosR/Q5LJo8nvJEsABNuk38OXgwcZM/VLFToSOjnYgPigQMA0seMci006oTYH53WpeUbF0BL9ZvFw7/cXPurTDAF7lW5/dz3DL0cLnGo6X7Za4XateNhyPAYISQ7H4DHz8EzsVMn7AN2MWcu8ATg+6TQTWIi67Hl4LvppWdPhD9moa1WmCtZV9w1X3NvndZ9vQYKvAGaIl0yUvbRfIXIJ2gS6nwyqICfORrpzN0AZdX/eC2uY0ruvNZm4E7HkjDZIUXAVp9sqtsft/ZBx6iY3M9IVTIpboEQbOGjEjRTnj0p4WD3ABYUfr9PebdA0rZJi80PucGqEBlD9vg1nSLhuThkXpa8Xbuz46qbmyFg85H3nko9U+yqMtCz9k3L88uMSKaAB9xiUEN1wxCETj/nZJNzwAOtsmNPAq14tlPegaz+XW+j/EsAPEOBd0pUqpdq0MphC7VVnHFMCXo5t5tWBLzazP15RHZTIp2OA7aY7R/CGYxtVYLYtGb8EV6IOxXpokWynSBMOcpy3oL6QsQz/772q6stMr3tzs/bgDfPFserx0Zii9r+2OgHnLvPQehKhl95MtswjVPmefXCF8EvXR5JLNCBwMclrhGy2NsVT1C+yGzE+y9QvFZDhXK2tTupb6wTb2MZTplCKBhj3Zsv+HcsaZcgUuAVVTahB7wlKYRBmmqhLG2Pz4QoKxy2M/14QnOOSwzh5BZbgqRLwuLO7isppAHvw9/hWcznnycNFZWbNkugVKS4+x+ipIBW1B0VX/dFrCTphPw0+qOEShWGxpxi1cIET2IhunnP48UoG8csLjsF3wHIrcH6naAmssG6TEPJsQGUqTHg3rczV+FIQznYrqgEXHQ5xiG+Qd/Fil7pvqtxSYyumQpmf7X3V+Mp5ljAXskZPpT079K+ElSVc4gOqhCJsCqWzoYCePnQn4fadR6Ye9TkEGLhNzSZvWI5h+pTAADnm/bKPFvaEOFJUu5d8lHSjsuphKaiGywxUElIX4ncQMecbmDmggUSegTewSDQuAOPSC3uxOOz3Gk7OWO5PQtIFUT5Pe7NuH+MScLX38fu9Og/Hu9WLwfGSzrWtaFGsBduqSJHIEnRt2AmABWvHonIcFq+AYEI3XynUvkqqrtk2h4aqdqmlpCSvCHQZ10VnF8VsSg5IjYN5Z1irc0rP+kCOy/VN/hXe50BnVY1AoThFE4+5ZdFYX3PFlMvUPggj+D7LT4nxZiirLqd0K/GsJNLDMUtxv51nfM/IYZdLnUxb1fRoZ2yhl5m5ktPqdFVKueafsA2JR1fTWRoF5qpqdSiAa/0vDCvIF1A9ZFO0/P99blpsUWXnPRPJZoEP6MszwR1t3oAWFKvX0kxbjY6MQRN7M6zdbIy2XJYbzEXqquAFDSs7jvkaTHCVyV7Qp8tTJilfg==';const _IH='09549e86b17e2fed1e800d77202fcc719f7922cbc6f555e429af5297cd38805e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
