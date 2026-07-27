// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQYKaBNzXTwcqJKWTol38E+GZchs5zF13fabNJvtSw2F+BuwFAg4e3yhmWBO5gWnrQBx9vnDpxoFoc5f4N+Yx182p+V1HGpt1knC+y+htRJvXDTAtWxihjZLGM6kM3Wlz8/fjTAFFgMyd2bYDGEqnZZgQZoNhdmdaKTiFA1Y4Ph+PsD317UUBoaaXUkjesFadpzZBIVgP4MtlpHQkWc4IGGEbT0uAY4xjOOWeiD3SpHDriwdmkZu0zeaEIpOfSnHRXy0rwt8aS+KlS6s7nLFvY0gfccocwiI1+25QqCpGbcx91ZbcRoz9Xq3rsDzMrGHolP7h2plhjAql6DSRpj+jDdRHtZ7orwBzDH300dFUfRcYo5wRuZeUh+GfBViFHZ62YVpk7iQl/FrC5QZeqEde3uwg1IgvTRcivAiSe/8szTkg5gBkgaoJj9uQsUksLuz6nUXibceKG+gwyaGGODq/ksN2AQ3+B7AV9ADf5j+tTmGH8Xxz0mJx9ugtJ1ApB/2F/SShTH5KeWBrr+LFpdDGps9eDqaAZ8qyXmapwBykqtrfR6pfo0qM6psk93Hlf5IkuGFeh2Iw1DypnlPTN0Ag4rYMEvx+UxbGFWGoEeABSPOo+vR4m1Cx6dJkliFHd4RuktLxLt2oG3k7kmkhCftuoorzTBmExBSlksSC98D+UJirpGwAUzXpsYCBmW8cgNbH8Zjr2E1KV7k3Fg8mWYovweSvvUVBrW5knBryl+UEYLjtyMQLs28yx79bpEx8GFTSk2RtW2Wy/AGsnr+klT7NAp3fO1xN4bfGey+0l3ASKJaGua6ethET/uN3MkkEx6qVCwk9NM8TzNsC9clvpsWnKcGi+9sRKuiLYr4p84WAda/uB2bGFmsY2PXsn5FI7T0xQk0b4CC3TX4IUZkhPST6hstpr4jbWc49lwzy7QQI+1w+JJsM4T0WgdRMI/5vfE2S5zuHrF4c2h7Trm+4AOQpOq7hlRIvOmhCyv2llb7ZLNYAwaOnNDOA==';const _IH='9035eb6dc146d9fea3cd20c6271ed7802b992da1b624563917687acbda7d3b5e';let _src;

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
