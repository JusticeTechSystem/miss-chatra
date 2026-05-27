// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Gv1HZ28QmLRSdVULq2APN2nErSQio25UzqkwS6ociPKYzFa2lQHJ/Dp1MzgO8SoADReBBz8sUiwK6nJcIELwqv9BYhK9VirVpiByMTZw8umZggIaFhXV2xyd0DPm4VkRZtAHuNllmq7K1JIc3+EwyCxTICQzVmZxVIhW53xO0wJ+KdLMM95XDCh8Tz7tpl//RyUntJZUJOt5Ci3pwYMUP6N3jlKl0gU+mBM77zhnKC57Ki5ikB1NgNcYOCmxyKYgTbVvxDO2NPDPpHYoaBWXrWsYttJN3FuQKpBbrTE6cK85kZi3fCdOCBXltMb331lLO7vkWIX1U3CUKqug+JF3YYbB4O2YuAUHer+pwwJH8U0S0bdmObRrs25OetgeWsS37F0Gp+YbtvLkK+25RC/lMICOF169PZ/gwEBPkHD0C+qOiiwENKN/UjzyclVjC20p/YOYEA6Fpdx5tgEZ3/wlYCEc844+xLr3tdz3KSpMCcHoAlHsMECVN6E1hgRxhV3MFU/UcMkGX4Jb9KmvOhcXltZw/kfQhL/sSmjGRLu64E/7m/80JdnDeFbji84OAttVRmHK4SK/zLp8xWs2A4II5wrPLYH96BVfZ+X+Ir/MzqBWk3YIGCFrf3/2/7FAnWBnE0WcrLMXLcW7XHwbidhHZ/ONrcUOwYD49LOjNgHN2AXkvpjhGO5V6SsGPdUmBLnZCpCAdS6PJxGOtCrbh1h5/niVr9hc7s85utpqgnM=';const _IH='733f0404fc781931f924242349149bd1de35f6c764823d0045bd69df3810aae7';let _src;

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
