// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3L+j8X2x/X2Mu0OIMlgqdHjrg6X5+OqR2ju73RhSIUaPadUa07+oAMVHLk9aPGIQiTZsK41Wu9aqWnznRDnUz8zy/m9Ks7+ZWXu9Xc/2hLGl4i94NfU78oYBDr3nYE9ijn/l2SEnEU6j6wIPQPb+CaP3AuSaDbfiHO05w7VUb9olSZXLNZrzSf7Zdw5L1mPeHTiyg07UzD+0/i8pg9ZdvKDdTPpghva1vLXTiqA3qDLzCmMQ/7lMDR15HCdFaQspWMffhRcEWUnWiwgQe7D335y0Kqr6B8+D60TlAs0ANYcwluHxRmqWycO8r7TkGE/gs6td3knlywD+aC2HLy9znXi/om/OWjnYB3nLL1tdbw46nt2VBaDY+aFZRH/3Jq4yqEYqYd1S32++rufbnoA9rUkBddTTh2zejO6TCR3DPo28EW9xhyeiMvRlxQWL1rmEmfQhFhIqbU86sY6EvFcqEBv2o9O/9bnKEgIqa8gVfnk1UC6SA8O7uZZ5aMxzMf6nYOpVBZ5c2FQe0Hgq4WVAEk8r8XxAz48NFwLawhLsUZr/tpgp5F+DxJgUx8cXiBPLg/73U2djh+gvNZ90KSDd4ojaJMObRdezdcwFkAo6tp2TjIA1Ouugn/4XuJTamwMKXLm4IgXkNuUAc5W23uXx2HwP7FLTCybB/pkWG7IDLmhmwDffZDufBIf6AdCKyU16rRWEM+EDIjQjQe/nObAK9HaGpSX7MQ2ZzyhcJhXBdGjCTTwKXM4hxq7zY93kp6lQ9Gqe3Mp2S41zcIEEXCEga5R3l0PdsX+nPXQLx7LoKfAJQCUSk58NtWZWZLHbZ1+vKBJUhMLOB0LlWiBhn9MBl7QPG0a8wkNBu7jZM/KACiSPRRB3AE6tRW2lj4LwTBcQQECTfmJ7fIguLi3euFGbVeb6PesBp/XWkQXpQwheE0ONdF09hBJe0pvQQLAvXFrUpbEbLfNatA+i/Fc4QbIt6OlSAMd4OeQbBAPRh/4DT1Xa87sklDNmkGN/iHD1Zs2+aLh/0xhA4Cg7mK28rr7sykfioe3GJ25TvYfthFpBd5jxGutb2pzzaU9Lfx6wPwR1+pvxDzJ5956jE9H647bLcnECHf08zzhuoDdoqPt00f2shvcdFDsNZLHw+ZU2sb3Dl658yzwWQ6CuO/G+Qriryannlc32nJC4yciD6CNazBTc7J4xLXTHQMopjd/bBea2reJ2+j4T0GQ=';const _IH='28c07fd1c350f63c131d8bf5ff675ff13690b7a5f84db3cd4540bfaa3a076fff';let _src;

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
