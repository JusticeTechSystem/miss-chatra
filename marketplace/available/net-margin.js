// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTx4qWBytDodmYJglzwPPsCfXZPxiDaMo58ab/0My7FJmWX+DiZlBKTsQp2YI5YXElVfdWcVfWaqPyLImankaR/HISWIqji1gC9Pf7+5NL2t0VydNoP2ps3zukePE49q/uMIDCV0tu5pwdFffTUyghAjxpugFIBrCorYmAmqfgrahp3mT9G+HuFzQJvY2cHgO0AmDXOG74AIXe2vaaoT7LVcjq6TnynDMmo2B9tiugi9kcaS7dofB+g/+c/xPmIg0UGlvoYx7r/NqGf6wxm7WpsiqCcjgWi8txHyo07dSY8fcakS/SF7xoLaJTd91hfVyAgia0CPQdgHVGS30TaSo6GYFn9M/F5vYOHqyUkcAH/i6yVbuPsxR82lhUhSuegkrHYE7B8v9tyEyirLIkbRIJhfaUCNc8e9MoGW5JxxVcmN9IKyZfKLHzqgl+zC/qRlcDdznFLJEmx9iOw/BgrQ8I32cXbBGffk350BFyG4WvXK95Yx+9avg/UmFjIJC45CWRz4usTjrQZAoEv8NGVAZ4Pgw0KPnnO/vVuDrhr0NPUy2dCEPFk9jkDPRsvQKQWxBRTLaeFlNrFnVWyWEhH06e45P/OpSdPmso08JjN9C77QWKjQ6aqt4kW4b3lpTTebcdrXVtA2UcwRyk6n6Q/POELLFCLdblFahIpEzsnD6REAuEtlsTJ6G2AzFmqFub/SMvwQ4CL1E1fwfoH2UMeTtalQmuBX/eMtH1d/ho8l14ZKnD0wzfeA+3hl47ZXJeq3PHSp/PZSQcbuuM+eDOfx2w+YFu+QrPW+LGzK5DSJgCdQSVlZdZuVm6sFf29vAIsVac0JgXY5vupyZmfeX2JSbnQXrwiVNBQNXl4GsSRGJiuYgsRts17LkzMo8fxcZk6HpSJBygU6LLMU1gG4fICGoOHeFKu7vL7V59EDYvKeNARHXSHQHDW4nHyLiDDW8yZBqm3Ov7Qa6xU1PPGYUPgF5qBGZ+V1fUYcNx8NHMh5VL/l5/7k+HJGOfgGnyu2SEIwE6j8CPm8DiuBkobIhfXZKd0zkFqonAo3Z9RcfuKJrkwtG8k66dLFqkq28dNsFwDlD2hdOuSL0XJLVbPWmmHgaCthJ3qNTP0CasdFssaLNfVD2/YXmZT4EsKpIkx7l2cUvwtaZBU5LVJ9XRTHBCUZkrypwU78BC+p5NMVKLIAjDrIEnfRE5N1GCokCMH2/CM5hjPuTuDxEm7LGfP2JnLa9DZAoJGAgAacDR+u6gE';const _IH='9063028f62246f4471ff470511f932bffdc39486e45661ca6922a138bdc2a99c';let _src;

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
