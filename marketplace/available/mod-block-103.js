// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQNwZyydPn6yE8wCIOqfpudnFMu53oXHvlTKTIkWRTXL/abcOnGo++EUcyyMiARW8GCIFWRB8A3hC1+074OcHTtxD5ls7YtSk89pQrQSk3Ir77PrWXIv3d8ALfEpWsNBmnhlLLZdvYzyTjrr7Bbtf/QmOSMq73esPjm4aUjHfhbQgS+kKx/1ekvVow1OtCCDZCbMLOKbV/SoRifiCOLC/2hKxQiLMKxlwxs6rUKl7FcKnlcJ7vEuTUDnwigM6CFGmD0o+kqXzI5/GAOVWrPsayXedn/8m7p43XxthC/o+0L10H5O/WzzD2PptfiwtvFZokPEvVM+NlBq8iehuNu3LP43cU5zFhfQKmRvGQxt6tpIEoYCW5Ygb2TVw66BEht05Yp3QQXjRF4uBNZvdSa+bk5kaj+2hU9dAi9G4SbFOGmsd1YrmquhSFDnI9HX/DKsPwfCDlil10ooGmyXfv7as8bnRa662W/fcSnpGjk0dQAhSZ3hjz/JzP6Cqm7N1guM4KqzWxfVJI0M7z0M9wwec78wfSs+7IBYlgwMYZYULBbQFJ+EbIOcRnWqRz7eCpJ3Zw8QiQ7VE3wmhEp1MSPka7HFfEiuz32QX84ILyO/ravH4ZaCxudP6TkTCtD98kvCu4QxoUnyjSvOOonnbqNeD3R5PYS8UVskz1Cwo2pwbVsodHbaXBGD10BSKc7VwAtOnKrCuVG4zIk3Aaxo5qHg6akaTZuK+gp5hwDj/f/rzGq1OjUZisc41+lKtbBFL7bv8i3pPwLONhIKB37CtoNJtLnyx98MnsEuvnpEPs28F6tl/wVGZyK2oCIIYvEjNFyiB9nCjZBvxakpa11lvxEC8UcotvbsNfhmbUYN94t83zyWakGXepdr/yNFRiSOPyUIa7H0uU1qe4AOXLaQS+nWI+7sjgj+1W1kcEyBJlbXerbpGxN6at5Kswr3m4oRwPWaRd/ov/UaTjMoXx54Q6YNUmyrzUOsbnkYhr2eSZ+MzkXu/sh3zFjPgY/iQGcjhD/hKuR1uWSetNzyBTjntzB8BlsCtHqdbrhG/q3GEm8jztSscD5Eug/0900nFF0lyrq996+K0wJ72rvhBaEsHHwPmbICAL5MmP7nkT5ovDC+MHSlNZn+46b6PSvWI4K8GBjLrJnaax2EPq94JgGcFIoc7DUqU6Y/HjMHvUeYHskzPIE+cZUjOzhN7DwmkqYCHp6eZdzp1c/HMHokfbIe30zh1bFNkUiujbKwHw3mwDsfyMB9Ka0Bwp00wnBXUavbLD8ge0U9TEFJ7sGGP4Qjn2enbJKSUmX60x59NgaGAEnyZMYiMR6Jaf9r2jHjKwkjMs6+ZoH6y1fyrvq3g5oCr6JTHac/fcnAVgZJkiyTO54FAk=';const _IH='09385a28a0e5ea80d4fe637c250cc492110cfec71875e6f39b744b6410c3e43b';let _src;

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
