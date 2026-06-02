// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fb35MiZeXGt6fVvG+lxL5l13USUKMHCTkC9zLNxNu9EeYGmgRuxQWxN21BiuuRgH0CYJX/pIwkHKlN1hbuBbIiyWBZ1WS9AXuKrXbSAy7Y6XYMmyGdrci6KdmTMX/to0abW1dhYc+9HBt/jwqyCUvy31Sd8yUG/eY612AGOXDUgjoc4QENjTyYvyTCXFx6zIH6Vad+FXwjjOtPn5T/BhidqeXhivKYkavMKu2t6VTk4ccaKNs8U6Itkk81mMhq49sGDLB5JWwFmYWWEDXQti5eIjwFf/YZpW8B1BJE7rQ+BjgWAM6cT5rEy5uodlYWIRZhVKDQh52Komv7awnCMKsB+yL4Nc1LhyTgqhia7QnwvdarOiK8Y6CWWK1m/ZeEVw2r+sLZxRmf5u6dSj1l/NT205hPwesfhLYO2+FxXDBtq12kiZLOJJDY+KvKTZErrb6OtxLEcOBRBvhNidHof+c7ojc48l5f4jvTWyGMVbcjo+CBkW1C9MKWxgxmUkit7qRfw+9Kf2UzwgTfTek8f37T2pGEPzfA0owxKsz7vPpgnLbNLhbCg5axkkuP0aignEPHF8QGFgdW70dJgQO4wEHQ9IfPAD0y9fyf/VpEog/tNXY8vjRclWlj9v+VVqJ7SHoIz301n70ThghqsaT6dSmYaIK5mdhgmxMxKv/0Q8tUqB9vhhY/HU8njZJ0ikYAe5CSht6CmkQ/QpG5BErCfdwwg9CIcD9LbfxF5NnMC2cY8V+F3ot1yyf03z6nmrBLN/3xOvgolXnrWnWbrKuLUIFF2II4rS1ZBKWBOH71AhrrbBcPAg0p6JMaxFIdb+NcZgTxJ868MOfY9EecH0pvCPqCmdvNx0A4Odvfh2duGpnRybJv3OPdOXsWIu2kvybkN7zYoDGkJG20URbGtIZ29au8zv0tlrElQhOvRmXChRlzMoV2atNqlQJsP/O5Ls0GNaDHfLZ+kJgXxfSnLiMij1DDNnaIEPP4qljATIILK0KJdXTmr/68HSIUkVMJXKGIovVGclvl94kw8KAD9X6vI=';const _IH='1ad8c35a38f54950bce03757b6dc46a593e8b76cab3238e2e073187498fc9a8d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
