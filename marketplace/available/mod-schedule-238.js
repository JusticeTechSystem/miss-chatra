// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ4qHkNxr2TBjTlWD4u7C13SSCM9y8CugmhmuoS097MWfnpHyR4keHB9qKkTFvi3Hx25Rci1tHfzbDwpAPRpSNDtDnVSZWsH0N9Sh5GPhAv+owWbI7iATGDvMkZFkZesdhyLY3B8WeBb/hh2kPiwjH35cbEVzGF7ZaLnEGveVYhIHZskfCiw4zfZtJfJWcA7T26vw3P5DzvreTTmDtCFktZX23ismm4L+1A9Y6BF3TtWkLP/RlZneEmgy5Fkfxn5fVzX6VGrOnhy9D6lBYBbBFGbVr9GsK7G6cpTZFT+9QbsPwoT7kHSq5Rs8fn83kQYBdCkadpuRtFQXFLRmgvCFmVKJVgWBMI61v0kH8xmty/yZtkfCAH4oMozQIA7i3Q8S42TUFh1jmLxsXmVcgyBcHoO9BV0OmV0LS22PlfDnpflZpXTzrFO687T72y9Fm7ZxAP0pd4/6oPsRIXpdtNNBbXeGT4d/EJJ8cm2uuScSiRopz+TjjL2olybwTqyEjNFpeDDp0/Mhbw/EiCImzDqmTXCVvTrqIV1mL0dNLFRPpiSGs8BthwSCHn0uHyxdBjJgN4C34VAla7iJ0RtVOVbtupznyzuukyqL1AytQVMhjidY6AMtRPBB3P1t+qzn4dpfEgWEGRvCgn+vL9wO3aZ1B4dzr9RwnGv7XfYen5ucZ32G+73KAJ6eO3bh8rJDoD1u1snELVB+0OIUwjYVQbc6ZcmIMB5CgnFgTuDvVvv+iQngaEhBdofxF/0LKUB9SrgSTLljs7WZrU6xKbL0ieZaFIz2VYgUBg+XRhQesJfe/EO4BnwFakVvw6mzYkusAQU6RoEI5HhHlQt5kl1GGoVx5Xsc+eYNYiwzsgLmVTrQIR+0jYKSLn+PyTFD6J71t7HIb1yL10OEVf1a/3oK/JtuhF9qCtE+gAjxMYt2K+RN+neLPiLnXiljJMlPhKRV4brqtiKLGaz90MwuAvt9EXnDr8WwVdQ7JWXphEJzfGQoDKHMEcX62sD6H9PqgB2KhMD6dk9bNIDjAWgidLOz6IuOR1+4fDyj6GdvfF/LTrvGGif34PcJNKFtST6+6aU01rpNifo8StqYIGJoSktWgmWlLH2T1Paq+gQgU+D+iumsiTexYIbca8uaAxUD0jQ4FiRMkbGK2ECXTu1MdzaGb09XHXunjMREINV4ifBS/kosXq86bkmX3akNi9GqdUgwSryw7ACZoEDmcGLrnpT4Xj52uLN36ikvvVzUKaPIfELbZtq0U1ObFQxERTzVJptapQyKBobjXvQU8J8B90fM6OXehOiCRNHryXKeuC09LDaVfewgT72R955sL9lKY+U8uEMf/6qrfijM2bD8v7fma0bYZ/uyK5zlLbyoWw+BE/CLsCV5lYLvWEN1f6excE7qH1fGO3Cwzb5r6GkDoXD2E=';const _IH='0fa2c5fc09088a559416603d6ed3dc417d4cc4e88ed84ddfffe7f08ba805ee29';let _src;

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
