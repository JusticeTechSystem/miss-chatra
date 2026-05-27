// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hE2qS9Kdv1Gde4pJAcIesXwIb2XSdD6HQsUxWPDya6cZEtGqwS26sA1doEu+DzWYRDP9DSnyokLdW6s3WtCeUzQezd1KQSC+o4G72vWii5W+tiGpcahUhlyhQQO1H5Feb57tk2/Xo4jHiTzqPprvrhqLziOd6A4UDl2qicN0fwXBN42yAmYa1FrZDZ5aoOGqnwRpnHtkx/8mj0ItU9gC7TfZMGOB6HcLm+5r54wUlZKsUInXsPDw2lvtNrzmv1rNlncZYsZ2YJovCloxWLO6Use2+N9gXc59G/5pdDqAUSmn32q1DRnz/pV9i7B8MN0VCh72jgDe9ihTbOSUbKTEa9KDUmaaAzC8MoYM0AVH7GOf2VETH13TvwW4GOLark4csfkb4uh1qJRafmX3fTvdrfJ0eyNcxJ4Mmd6tdkGw6EQYb9NNI60aLzpUuKLjTww8aemmq5FLOxGGEDHDiRnXOqOemXK+gRV87fzQCXTtLKjL7mUo8GH953PCXqBHufiUkkXG3WZ3QlBh22oAX/hmkUIIhN+5BXDZeAs/dGMPVXOEvG3aAFGzWT6BWn550SlEGSXI6oZA0/bVnDVPFD4zUA4OHmbsTwslsahx+7s5inz6BQ8hgtc3swrRmmGk3oK1ZE79DlIK0XV6MPKObzDYbuW4M7iBcIVwISeFMP5f5uXVuiQCzokyYNii23yOpNxyP0uTEVlSWzvS5Wx3AQuHeO56visgOodDg1WiFmJ3KpcHIWqXfgktthKTyI5un9Nhz85MRgiE12stqxGqC8Hx1C51UtQj8kN1QPuWMgPUMwFxlf1VSGbPbsmBX30hrSJexCs7jtTFCdGmwNpmgvCvLQlo3FYsFxcLsMx8F0HkZv8T70mIySy1a5737EYvLzgXm2HRdMjNYw/M9J3iVscRvPCU1l5YcSYLPFJv3Ofiul8x39i+jY5GSLBYwDQxZ5bJw5kgxwWabZbxlLsha8ZXQCrNyaSxtK1Ram654JR2KNJEbgzlp6GH5g/9lamxgOGOJx+jjZ2WSZ8mmFHi0E0sw4dt6pROlZ9U1qjgKuUYc0uqnjf70yUEpQKSbKG6gegeeM44fq5USLSjbAIAjhke++QbplvLF36lyBBRMWqjPnnJV90RTgA0g0Zpa8y5gEU/gBl4Lf2hsnt/YFKp8EG3Nj9osOya18K8F9qEh2rdNmXYThUkjH1gldO9c8b/MWkTLA==';const _IH='4245e0514bd5ed18aec0c30359573e5eaf16ebf39a5402694b0a5864fa62a871';let _src;

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
