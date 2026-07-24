// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQYMLP/44FrvLZpfyknhN+WVdRpVKUm248mhVWkv6PKG4zlcvDJLvBTFpaPGtsEbhJuCwVTJB+amFGCOAMQ9XxuzMgBVOvLCuldY8V9Ka4KW/h0RvLF3D3nW0QWtRe+I/C6XzR4GC/eH1SVQClWNiwhNYFyuYFBd0UMNVIWrT35npsp9REAMkRa+rbTGFu7MTxNMQOuBrU3kxsPegbpXuWn8sTMvrgytqhX2A7N6U0qJCrEUcDJ8Y6eszeTrRICdgFvMZWRxJaJxgjtVOMaXWqQiJaKx4NY2T8ygU7SKG1ytRH6KoGWCjEDNHZkfjHGah0pCEI8JQONDf9pdRlL2wWsaYbKqr8iWjyxeznqrPP9hSrA7pDGm1QrjBcr0zlyyFYJXWMnN92ocF6g3YkrvmvMH66rYkjueYGr2WSxm33lr17V9UsPIDvG67rLGquuLLqoXID8RVyaa5BwxwSBHMMNUl4VEfllU/EEDXQ+UB9fEeAM7JlZ150GmbEDmBubnTU5u6iFm1bTNoZURLaIWQBwp2SfdiZu+df6Zin2ovTM+7kgGBOerE+rFp9mqOcqrGmZE2R9pMb6tWh3KYBWtuHWBm/mGpc+4fuM9c6LOUJSw6hVpF7CXSt236yy2TJRa7+EQYVTu8r0Nkhetb/8YCIgWsRovgb6Du7F/rzldf0QwZMfti6vR93kRuXuEZRCdAItYtGMaFa1/qPHxGMWD7TW4eewXn0pXfxj8KlSP8N/f9irrNzkpTv7IyieT8CrCu1Vm6hwcptx9K9Ium++JU3cwn6MNprp3xXiRlLMO45OBWNPtvVrzg1hC6dUm75vc80tVp9vKq46UmgBG5hj9LmpEFILca6SUWBYY52j3SywKdXAu3uRnZ0uvIw/mGAvrcGXmsu8NJZeKLoatuEIRj7q0bDjSAw1mr1EG80/vbpE5elcNrpSqUvXbw55rLAzfBBqTOqQ2Ph2rS0Tt6g/ngCa7BRyJf6HCfn4GFtd4qkv1U3lNPmg5eGTpijjjojhESkFmkH+QbWh7kPBobeQhbEKgB776KQR+59+bHrgSddHSEQ+ggwcwGJwrcYXoyz0plgCE2DWALu3zjfTggoWwaWKEc6kFgz+b5czOn9ZZmbt27/d35OPbNOa+m9Dx9dqyEMk0QQ3IRZQWYkq1KbSJIk21posCt7mGPnkkFxAp/B8ggEut8JM5LwQ/6qHUrhvrI0la9Oasa1J';const _IH='75a131175a101a1bab73e804e98f867dd5b33b1563132715675172172b44dac4';let _src;

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
