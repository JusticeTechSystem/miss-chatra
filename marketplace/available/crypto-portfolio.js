// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='etOcgMAsN6i83cX55+yjjqsGVUOCcPTKsb2QCO7MfUdCTwmaX2kh2sBqDCZaQKiAGhTZoQ/fsTB/pOGfivUovsw+B6Ca3urSRDY/WxzJC+/5+3aPu0qRBA6VcBRL7IcKcPzWTN8FN04gMZC6SoIrmi8384lQ1udYn5VPAW/SvxqWyBGnfk799EPCF5iphxtecZBW8CQoarDm6niDGLVQSpeqkY6cs8McmMfEd5PiRLss/F5A6KQbmNP7dhkzIIGqItljzmUvpMqCvnn4dpLkPpJAkjfl6JzIK9rhc7zf12NnOTZCwQhgnjnJez543tMTkhT0UOydOEG71vWAcOo5QyERsTyJetnY48zprLV9h6qLzSl6lSJDxYSQnGK6ac6YRvMNWq/ZDbtKosY3xjnoDCEWUE3hoItrc9VHSgyMJ/mvou2Ym8ebQP9HYn5mq80O7FX80tq3KuF38MilfMk1zd6CZEGCmCZ3jUygfUKHV6yOykttLhP1wB8DWW5zods0h05xOT+yGC42HXRs/AEFWMiAE1cw0kmgL654/CinWsuSmYsSEdDwmrrE0IRbmi2779vghk7o1b0CCvqsM92XU87crpZOml8rvCptAhejNnIscu35w/5M4yqodMsYLzRPR3MUmg3svEBbISlJy7JAbkO38x3rr9lFl9Fzqz3OgyqDoM4T3N2doXolLdO3jscQlkEA6QvDW6gdVjJG+Mu+s6tzZ3MJCpRKjm4ppL47fxRqJKfQJHqtkejKLxlxJl4CKVQJTH6VySp9Bay8ZmcF1PgRVPEoLPskcOsrAwvyDLOVr44CzjqXUbmvTBTd3UVNEpJreRNVUHnT7QNZk6ZpuydMoRpxl4jtkymCGMG1LdaQGcjrJ9ENTTtxnaXoSZZYla79TfLxPT10xl7t0w1xpWsKxgmk1H0dd+a20k7TIkcg/IQiHN3MEXKyv5Crkxf+VPokuEmRwkQh1s+BCjJUsqyK8bCWOZjU4lTCVs1UZ02i/w4a+rGBhpBklhVzyVa+Ihpx1o7h/6FMlcl52zQG7IgSim1H4BSJaY8fh5QqhG1+BoMLbtiMqfsdA4jASGBxmZtXxXmZgDkwlGcH4OUB66Hwr5lGZZT1/vl/OG8QwQraY38gcqWzT4tWpejN348FK04Ip2IgiLpEpg/XGh3R2M2CDWwfvDDpxd2Gn46K20XU0vs3fdxPth2/1sQJjwc98zGp9jNkyjIzSSsjDpTRyIaOpwJ33GklSL4MpYxYrMdBc+mEE/rxN91a1Y0YpkjT+Sy79VughgbrjIM/ZdnqVCcMdvvbcXaan51j4rvWnLGOIGrK5sH7yaEcpF5df9Tkla+IEPiy2Kgcz73nuFeuCYqsrVpsWACXlF0FeFSfcQunPt8wZCXdTq3yp79KK/+FrOqa/8tiGEw44luP4hhQgjUx2KLAfyHbZ2vgoKm2aWQz0Ij8j1bPnw0er73be1jCBKdPHHBPqVsZBsA1K+2gNMA/jkQYbOID/IcO2UAnM4R8w16tLWs4Mhxz9ZnpQe1vkJTfMe3UbReZsZnTwIiIKVHkQa8TX1uni5SFACghLVMqsAEwIigqUFNmp9p276WA707UtzrgfbT5NhNJ0UqYsIyfEE4M3UhTWGht2mswC/K+shpswLRdZXewtwcLwVfM+12+JhgZHm8DnzLrMpKxk5En1i6FWFRmEDBv/PyLBcm7FxPg7MAlDdXx/W6LKuTO0LpXxQE3B1vqXiQKbl+DYHHF9WDe4ILAOYsX7HaiWISeHXclM5DvNE4HbbOLmns3jghBp80d4D52oJustHMJXqacyB9PPooXnji5hpM2ehlsMpHgnCA=';const _IH='09899dd6fd84d10181d80ef482577a9a674949948928c32b31d47a9a5c058b82';let _src;

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
