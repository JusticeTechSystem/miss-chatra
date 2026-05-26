// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e5qQoxPo88tbwunCVqXhie5xQDens1qDesXyC7QrBXEqcvU1Wr3Gux7ORR4h6QTOEPzB3iQlTIC0ysp7qD8mxoTXCvcZTOSt5DY7myqHi4TZz4ZcJaGbmP6n/3mEUvVMnMFe9jMRZkdcOiVY7BoaF+x0XihK6Jyt1d/VbhDQtmca8QCQPeXl6PD27wu3nnNsRmoeIOTx153Er1leebycoCGWBxDYiU+aghPfQbYnhDaPn3KMGKVg0+Qw5D7rKZn2dGUByjeExZ8Cq3FndUPdWfSh1DU5vPd+Rn7i+K+/hciNVJdm3bUM1wOLU+VVct6h6hkGj/ViB+VCTheMcggZXDIOlfXDHJhBVq/jAjLr6jV3WFkq8x+/vyOfreeHgk8Tpb76vCHAgQOW4G1LWndAygnE2ADGWre2c4ZNdqSRPzh260Xsh+ljj77P3LwXb264Stcz9sbPzWPAQ+3HhKksvVHy2fCMknByiQ8diVFsWRDaNCbaIghyb4O3tPItLa4XxsLurqHlsFxj35iH4b5YtG9R+8zIR1avx+F/0d26zoLv0x44jjYrhk8jsq7Qyqdvd+iQq2PSOf6lJNnRmihik1vj1jU1fVeHhwMXcw54Ykwqkddfi8AyxWdtpGO43K7WpEicIoRLKktEoSVk6Za+nhqS8qA0OCnatOqoaxpAZKxFkHG+PHUmdMzoIEf90DgZlcSqxoJXVizP2SA=';const _IH='0a213faa0b1432c0083d05796ae13b4bc104c3d12b8d4ab1f3f87f76defa68c1';let _src;

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
