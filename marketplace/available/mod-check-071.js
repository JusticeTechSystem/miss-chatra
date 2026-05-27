// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8FrAb44WxujVSrVSUNxvnu2mKUDB/O0WIecvRlowe7ebRLsX5MUO+MLH5CqJJrcP9rx7hcVWc+PwWyrOhn/o/XV0mOAwdw/uBQ2mZ0SuSkUEUfKwS9EM24o3/iauezuqbgQdA1fZJ5+9Gp21x1vL7oXJ8//M0GQU7csnZVP+nvsgWhPt4Vo4qE7MoBTKF7ukv6RljNyJnRvlKIF/dfVExFb8BC8nRIi2ZH5po3Q6Kj3JFXXVvHTUWDPGc/0/CcRIO1ypXB12pDC+lZMJT+RPkY0lWKJsiVYtVXjeRPUn4gC3sYvcUkSgZqEUOJZN3Wx2/cttEUiGh4P8MK5TsQ++kl6EcpMNmXeN5dQ8+r7ebRb5p8Vx0yt2m4izywND1HrI76Oghu0ko8OLVLfZLImPUGLiFpLCUbmuDwCCQ+pFhujK3nG5ftPhKXZloT45ImSkndWKCKzmN2XrHMriw2cz4Fp8+jYiGVkT6L5d77wlN/h788uvwhDinMXIuO0N/zQnFWZj5rgELVDzOr1nfFbPRFMvEdFZ9zcztZmdqeWmOJYg9Ux9nx/jD76Qvb2VWFbnSqUo8TlD62UjR4AikkghaQQtRMwQLZnOBTZhhVeWzFyQiqgrlpuuEtHCcKsss9f14CAHYNKsZg5yLnUMdnB+b99uNvdDYLTJ6Zzx8vWvsuGT2u5zGWBFqvH86MdW+CVdoAtgLT96fmyZOyFzrN0tk0qJCI/2L2aBF5szJdU8UMucXZdk4uf+cArIKUQSBh6ANdibcYKh9O5+abFGiJkKqd2NHByrYAojTo/JlPzJ5xvUWTZ0i+Dc2Ww/0dGRgwSA9DWJp58ep7eF2VOJl9hOlc3Z+OSeDXWbgYdfZpBwvNC4Ds12b0g0CRPz1gOZxy7KfnIAmXUiSYOn5sGnTLTnXnVl1GtdSsU1TYNZJ+oX7dBWSmYSRe8OEhAHpZZg3NIJ+47smVNCMM02qZSh7Jw9/ZH2rwOg+ROkUCchLyd6SlvUy2ePeaAYT/5DnBdxVWiIFXmatvgHjy6yaKym+f///wY+7JYDt1Na1hgImBrhAY8CoB0RHPCYRo/bOdfUvkfPKPm8AQgUH+gqjHDfdrb2s8hx468b0FzSPs4vE/1bB1v6RA7zdSyPLq2ZE1/K25kx9vqnN0nau6gA0PRv66Grl8LXSdMyrWL6mkr9YRotlrbt9SUDSrJPpLjeCCJ1OMAojX0tAknj+hV26OmuyqMTL1TjGaniT71E2lL+rSuLo/hpnWnt0dklttKmCcI4I0VFmgyvoDcKc/Y1QAk4piha1bJorWC4RspFGE7vKm0Cr6stiS5W98Oqv/C9fzY/7F/D0Wjhe/B7vcG9JU/KBxY/5iBBAV6C6+OsMw==';const _IH='9628970b86ba80dc35b3a6cc40beefd2489789541e93343ae9e84bcb2b913e4a';let _src;

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
