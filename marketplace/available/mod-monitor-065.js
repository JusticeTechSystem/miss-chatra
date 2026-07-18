// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTvinc216k4ry5qDJse7qtiD/neIYwz9H1mJq4wx+wydMEcptJYtvDisgfO8w5jDcv79qNlcmYaO2f5hAI1VF191uG0Jx3SH9SLzRukLt29HNvfk4l0Q4KCSiThzpCgxR4rqtYNLXpghmYhbBqz3JeBFtIWnBbiidHVIBHLwEAQNW4CEUxXd1Xjx0UYPFd4waFXrX4ilGdvz6Q0Iz3r52iv+Axhl/IWFGAqLfxBNVu7e2Y+bfl6rokORZk9VbynaL51VXGFmCS7WTejaLhdMvmIlbAYHoC500xz8+smv8yquipHdtZLp/KW9GUjpLFb+zJSnfW9mOAJcQjACIYednjjNtAkQfEvcvAZJLHxyb1WD+GD3BnjTK1qLApoHyScig4zd7d1526SsH4WcFVqs/OTDfQmQPGMjY5H9KzeEqhQPrMlOkUpVVtuIGfzJE+Cjyrc567JehNxUCJdEBOtXs+Umtbgns90gU1SX2H7ZEkHCOL5g8wAfzi0/bXZK4808esbVaH3OEIFblGqvNsktxiOAiAoymPnsQHmPCqbp7TNEM+y/PZ367szaLC6+aQw+pYxNPGd+yX1utDHXe7WQ0kZBb2vMork9hky2xPbT9THpcZlC3/BWvdMh0b8XLZOs3RXm+DYlk/1hDS7Kpo2gdZUxjLgLsq4s7Q7Dk9jPrcDjH5Euyb1c+3Xfoz8kFKHYOJbTpWsvPScaoZUAaa1/rkt+bZPE2ljcixjiv3UVUXwaGYa3tCqpkod5n8ubrmiNHCkhridx/s85yFSQX/89J2d1GFahfuozRxis1IWjqaSuz3Wa87yYZVL+uY8oRfZvWVCRSWsuC0vbTfk80n+uvV/DJpWIlaHTTmp6ObW6Mg8nGSGk1ttksLrBqvu4cpgW53zKoixDuBaCK4nx62I3pJsLb2xE/DAuXmFfSfnI+WP5H9lRb3zemRxvO47egWWPuBS1hL190DSgQQmMFxHCX4DwGHXAXZL9/+/bSuvJJgLbYMcwsX6Iz3Dhw3jneg2UQ+omLpLgC/43KF8UXzgObQTFGKZIY0DnYYAK8+KkmGOiw7VH8BoOUNsXm0nZfMpfqmg3p/jNuE6C+iFHjwYtwFspv9pf1Plmga7vGmnBTLM+HJkx6asfeVcyqAqvoU84lr8W2D2bWvBQsFEQVe//vRq1O1ia1lD86AIIgRIIA/pxU1y2G1vzeOW5juo77/0nBPPg36j6toba2efpvHMJP4L00Q93FLFzC3mpXg2y1S9YjY1y9hxUvUHLtngRjVfFIuXPIjvC8t3XmjbUZwPgQ186iSlqjmvRaKotwk9EvU2LtH2Qhi7dwJYK0KcnzSdWtzBxvgg+zawRB8EG0Gn1L+mMdECgzziZzAP07f6b22QAJDw4ZWf3m8ywnGk0+8=';const _IH='5a8c5bb283bb111f0f8af6e43404e1e282cbe9acb9bfa2cdfb2bebf1256df7e3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
