// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQuaWOwOvKAskV7f2bAV1SRo7ndgYIw4xCVVHHEFOqBPdAMHhb+tsWiiHVVdV9O3XmhU+tOV58pDv47eG2OKZVGpHPltMK8xA+Jq3I0GEefU++RvTCikOgkRDMKCrcrHW8MHSv1oVd55SCXAG9M+MHlobnXUMzZTSu+7/dhji7dnMC6e2JK3HV/RhQWy/KjE1YR3oPCpMPXUsnwPvomT10LZVyRvp85TB5xTpxMwGFY6H/O9s9kU9wuBHUdlNPB4TvBcQfRyvXNXTeIQ2W9iZ8TY+BYft8AdTxNxp66C/tTttp+brH30/wsM1wBwbVdCKOubInrPNctoix3cgla9L+c4R5DigkLf0GADXwa62vYCPljb8WRnlwHFO1Inhdpvijug+YpwOdUWurWirpVOs4h9gCafb4Hz3IJGftzvzaBgvx0jayXzdHBpBzO0R7nPobnzP6nOi5IrRdYP6kbQvmTpGO39sFnwhMALfm5FfLtAFepILT44sLRSYE+sxpyCWdxgaY1ev5F5iO/pWukjUjErJ2FDn4UrcH1GwVKkPbIY/VAoNJVxgQcySFhCIkDnnKcqn/l2qdzwIDWhjm7scadvO2qPFfzoXqDlI5H2tiDzrJzBydZLqIhd1ebsORMGZm+HyYhSierqcdQFJ5YL0Vet6NyqocuH+P5AGAKhQYC5KRUemY2Cw4sj+4uLVmBbCWoI5RvGA+V2vObl6CPgS7Xc17x3wX8L59t1uxoN4seYYYyJwYR8fS7QXehlGFo5EgzfcRarCN+8NKTBBFAEtqVXp289LdOdqBWWfiNNVAieG0zf8rIacegIfDbi7x3DsrDrwJipX7WKylf6ZqeTF+Z2IHtBR3UotCZBadiWCF0exVFdzkS5kb3QGYjrjHbtY0+X+hnbogrEUHlaZzdVP/9Ow0Ox9hFFrZCgnEH3af14mGF7U383Gv1Et4dMH3plA/URxfaBA+qPUdQCfVyQI4c/Vk7kbQymtIgN2xqRz5tEy98Oepyw9ZCtS+MjMqVXhyRpds4oLJom60Xpp8JulONdXX0vINED9uDG0Yna0GXb2gZ0W0NaFnYfdM8gTMhSlX5mvetgJHIVWzGrU09/TfX9y84hJHmJXBHV54ZmCyjBylP7sfz1h/xgtEWyXm/yGnV8pQPrYh8lt2MnwL5NX+ESeQcFfSJQpQrUvPzokWHamI3VLR6y0wIhTSwh600Qg8sBIotdYy0r827q/Bjukx/grIq6hgDSxWfEqHKeI/qqzUpVz+xbQgP6M/97MeomL73MNlrQsQXR5P6FtcdU4fgYt/oaw2VXgYmvKFPf0/VpzbInAY6q0bRS0kRbldOiVhxeTwZBf2LoGChfuV0FAnWohUgdc+URbwjNM4=';const _IH='bcb83653f257f03a5f2b6ab86df2bf684a3110e950d85593b8030fa64a7c6e9b';let _src;

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
