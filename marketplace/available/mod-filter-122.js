// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSEFKifYv0G97Csce4IWuxD9ynLWl6bW5ygaB1mWAsaiJGm8kqiih7uCrrvu0Nx2WnB6182R9f0wFr8Q3+Sm+pzysqCr3byeW57aTmGJLT8p1P3o38JKlnfahEmczX7ZWUbaZxEDPT9fZpuRCKfNuEzoZGAlxvjuRZSEZLw7LWaP7Vq6DhYgyThyc6/INQU0D55J5LFXcpYty0wM703gqJAIVpk+e6q+3BxVVQHGXRYTTY2JhKOBHAtEQRsGSEHfBna2h9Maghd2MJlvBjknJk8BgZDG9IVZuWdhjeXCVCr3W2buLMe3f8cClDHJmxyAPQibYcc1CWJTFyRcr+wN1GwydcnP+eTbU+m2D2+ajywCNRmLHq0cGwJqVqQoZ562fnqdOOo3kU27GMOXJreBC/CFBLA5OlLY4nR8SwWDbhWwZ4Pcgh6/d9tTiW1mkgmDRM+Oomm6MNqRktcOhnsOlIm6vlcZQvaqFJIWou4M9zqMA0lEplQ5Cmc9Q/a60qOn+lsWqY8NxHOwC9/iJtB9hi0VRCB2gtoKBaUpv1QAznCYJ9GZIaDflJzFKGl/CeVsh3uHbqG4BL/ijhyrB0XZDZok3LzEKsFkJp6/KeoD03+NTOzdTJcacR7rj9BTZ/4G9Ayx9hmkErhKp6InzZeMPXxI+wbfVPPo88HPWJmQY2aeMxtmfraiknnFfABzLMGbnor5/alOZPNBlhjOFSLQ8jQ2d7djTvPcsLlHdUoH5T8GB26eiu8FdBzqApMxZmhXGWE2DaIByXTiBuok1VxcLvO0ZHffh8JFBqef4/sWwKQWVWSkyUe0NHvL1Jc+rszFuZbNt5rb/FxgITmi8sL767eVWntOS4tyKMhDqVyiAUxV+0iYvu4MTSD0lKuMtmXOcF///d5njHDIBq5wEagQ8Tf+92SQMjhT7I5WU4YVkRnscuuvssXr30QfUa+yrJmQ2P8dR1MpcCwHilxH4aptjee5ob57yHQ1cOJgj58F5gSdntHdcIeyFw0nFY10P+YKVFVfmp7ZrhDp+i7RB0LwAJ6VhXWDITouopNk+6aPW+ksT0QjZqYATASKgVtaHoIS4eOM4+tscKuVlBbc8VKa1dVmubf9bftsEWNWv+8o5QuPFIQ+Y1H3RTCa9DZpHtJp08udSPamOWiGjQ0bCEREZsTe5TtF157c29ymKzOijqjczZ/gRJBPUnXxphUiEf7JbzRQuqGt1Auxw5HznYKsKiRIiRUrREdhIr+3e86EJCgx6i8s358V2kuoidUYlSji/U82SfPRZWmrQasyoS/LmKdDpugaQsmGYyx3duBFvtX0oSBPyY0+xjOTznDdcSIPQoNOo05+W2wWlT59OwTMNm9BEK+6aN+PdQiPa2uy93SfyO/X6PKLxHW';const _IH='6639f643dcc884276eeedfb7ce335afa5e42f41827372221793251cb816e2995';let _src;

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
