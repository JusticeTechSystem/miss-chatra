// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwD/tnHdOuQfsFWIuZ1aHSIMLlcek0r5rFx0jhzZHDqD8iovwbOFxPuqMOPNZqlRSbErgeKOwDtH86bHiF98fhfPo5qiccC7FrxYjwWelJDTHmEim+K1JUbVdHz3XeGvGmNTe2f2SobiP0aDhmCXZhQZ9B7lNmgFVn6f+RlKHlURhoYmBnFX4nWqLNjjo9VX4s+nWpTgYrXElhKRqjCZBROc/HPZhh+fI+D6570M37I41s/Z1PdRd6rKc/dyjFvkq+0GTKSHgZzyzecvIvWzeuciAH6WmvFDIJuvqBa29GAFY0OKXifBEng98eJ8i93gOK3YL7elZkY0mmgQ4gpwlD3hipXnVYGPmcMKD6TZlI07b+D4Wq+kBVQtaiuhGsLsijyfvvaW5fZsxxSxpHnjwcD+xGb9enk42+ufZqBQh+YIRF3VYTJ4mpIA1LLEkzUkwJKK/pu4A63a3zWkooFgSw6YsiC2c61R1OWq2Bc20OXueUk7HTvM8gViBrxh28ABF9czSw5VuJbtf+R2hfQEoh9LWRX7Ya9E0Wdsr8angVzWvsjSZfA/Es57zI+uIMvYmx6oFakyBA6PC95/kwuRgIAamT6O+qgHgFzQAcaddQU2lMYCvqZhdrgaNqFLWyDZPbHJvj54FkAMnaCbKG/awzCbpFJrN1yfz8nsLuZFWWK3VmYgBWoY79Tq+4nlwp9oKmshv+6q5CtnH4US+ryFRdGJ4T+ZalB1qhQQmOGIZjece1QcIIeARzv7PJtd2q45fscmzzAf+j9xHZKyLS7VhegOuIhgAbbGCh5DPnoNIrpcDEhyXSTddNtlxjhcAlMcf2Nh0Eskak5sLUlIkM+JrBK7COwIaxn5aR0hv7PV/6orz4dpDGEkvgccpRqAezkXxaSyBzuQGwcyo2yvtg3XwJuHM0geMxjRLhmjQ9U6FlYvEQAM4u991B2FKsafJnL/B+49CfDBsQWRZv7WzVNfY1YIPXUdxnNemn2C/B8tPb90zKtBAJOZQmdAwv5VuRx5PpR106QJd6SE1Qg2S/Yg2ci94btdLR4YlgnBjJaVfDlWKo5kG7Zsj22FwhJLQ1p352ZfBZWS8O2ORSHAhDgkQIbidph6nUAZj8i9BvIcgnLZld9qL+YrZ0otuVoXVOQFvLPcTU0r3E+ZwBlLH6PNBVOgk3tYaeyF5GvmdEpmlUtUbXGHn/Mr9umnAKz8bB87w705nqShZrP7Tow7sAM2WhXeBnkETu/bXtw08v/1jBaJTVF1mj0cRHJLc9IZ0LM/1iW33B81dK1BUMjpjBFpGnAJFWPuPZiWo2DFSTjw1+tf1VTYj37fzRchhZkNuchzh0aX+fH3BzlvJpAipFeT8EKjbgKKKTuuqcC5i/AcWCNca0/BEra2ngg=';const _IH='5e03e2b5f4a26a083ccc80363436de7b25d54b63880b1321cbc677cc1ffe38e3';let _src;

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
