// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NmN9Bvj3z62E+9y2XBw9GqwhvZs8S7Ndw15ks6GbxMjQ2xG+qLKugJP7kfcjfDY8yukXRG1bCd2ptnZsZ3aP46tM7rcA2PBbg03SxVW9NNh6WODf0ikUcUjdYlsB7//ZMqq5C74Qc2sSEHohLoaGDPAFLrD20/7TahdZebf3v8EunuYkWXo10LTs1QFt+yvmBw60h5AmGWrbmHJeOuPGJYfQs5JegD+NaeDTccVzzsX9ePtT8kCZBvK0K0qB+bdnlD2FoXvsFPSVUraSEm0Ct0oI1wd5iVKrAHy2EK1KMmYqIbSWBRwJRPnSr36iisj//TtHtyQ0W9f3vejYdbVf7ecjRLb90i1D8ZJcZyBd3IXNO+j/XPO5WWYNTrQ1km45GTfEJc64DLFWHvv6Wkp2LFpHHz1mmhkvBExjjENJW32/pbEHx8hwtV/RCf5J8yp8AX4T93x9w3QlFqpnec0+8Y8TsjQfb+dgBX592ioBsm9pSj5WU2fjZf4DbOGUynkX7EZbekZ+vd6ENhu0SpZFZEOzidMOxbdEXXJjbrERJWFccvvdEAEBOLTSY+Iq8dwvOElW/Yg+cHfi5yJK1k/r1waTBMauifQNsbgrqAUzDNic2cgU9Lhviotwg/8SFCPtbDEg6ciiZozWoFtyFmFdzn9fYksBucDjiwFHwmmuwWRMQocc08cZp4XH/67KeXg4bGwKGtO54ONymzNqI+3QnLnNwjTbdiAqD+ReTrqZlZujtqxQXjAsy08nLLK/oZLmoEydw975u8frK6AKm2Z5G3nbpYlNY6uov6aobSxvdTtDJdwsCrZzYGlE46tiAR8oH8/+Lr6jmtASCrJe35Hys9h+DFL8Nr2jrJZUtEku0oDGA+bETi4P6zLtRdhOoIvL+HiVY/4KILBLnZCAw6GBM7OXZ/1Qt8X5sHAEANGoL2MkqO7esFesCwHluV2+SDNN+DM6Y9FIUFyLhH1hWRGiQX9n2aM5bH8mxWWxxjq12a1laqPg7nxU6JyncOaUjr/So8pc0g4aJLVVkuJuTEHO6D5hXw9h/F2ny6qgX9ubfFYdvGvgqfNiKBnPHr525k02ktbJLuGXLIqsN3qqqTQxJU/uDTuc1j7C/I9TjqZOnP3DS0wX0P7SpgTXIS3JN7XThVs+zTFxZTo5KY3mpSHRIzTp45E4PKtWEqrulyDbFbO2uSkKCgQisfUdg/EjM4hKMus9';const _IH='142362aeb9fe5a535959f32c4d92b945f9ab13d2f101a96821d44867c049d50f';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
