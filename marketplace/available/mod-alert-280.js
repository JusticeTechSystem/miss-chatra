// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='243QlehRHIQ4eou0aEhFf9NiKp5DpaMEQtzXoNGRhsHoHjCXXLJoAXqxY6PeYfpEP8H/VMRifMISvltoE3dEieb8uo0vPLx2nHhAGfWXO2HpxSvqL5V+N8UtrkJ5MkmRz/CyExOCy81OV1PMclc70mQCV3WzphH0Rebtt/Lnz8MjEtfUl0Vpb7VzMGu3H4WLBCULDahte0Zy9FzyUvePFKI0G36czntZN5rjMcMLxr8QouvLIGdbU1a85hFnnr2rdamD7X3lLalSz8LmS6k94Oc3x+n1nRYIT1yjYPMtFyL9AralH9ROCGdI2uVck5V5wZQ5eH97FCf66D3TtGq1lsGTWdw1m4ZLPJEOpac2MyN9I7P6f2V4srwaTc8lybeYW2fDgYH/T9939ldr9oAalyCX3VJhXDfrXz6QXUhlMn+zI/hbKJOuPTrMnyDx6KJSugOuIBPNEzn/MsdOSPyhmJTZagt/rfk4hMXBB6FR7txRipRG6jv2vHay7mVC5IfjQOLxjCUrW7zd+qjbL+86I9yKDTZ75HlTV8KrfQIptG3/c5z6hf+lB1bSDKnbXc702a2MrYjCPc+drZw2R7P1Qo7FEj4PZrbo48XblL3DnxIaAL+kArehTmqN+bsf74g0xz4wnS5mQbhDGJIXWB28EHrd6eFDhoD2uoPGC5VS++844/mjhivAw1Lr932iwZwuxbbupjOgrgBBF9KdMxoE3SKboJoVCmbn4Wg1uGJGBNQIKGUzWP6n8OPvs3gpMH1kQ5xZdJp7VW4KmL/QlE09cV+NYNFp2cAF/M7wXWiZ6mSaILKMtXV69D7AXLwxdAg7iSkWAmG73yA2629hGQv4mUcJVP8LcDGSnxvKEIqeR0W2sxslOZ4QhycyEw7i8ocyGZugDT+3fgVysst9xsnpITPKaMeCdap/DaFyP4dnL30IVksJPwPaC8ngthObGvGyju2aoTo2l/6OSVyKUAFcrlVBjHunnxTfHon8bgCM3FoOZ4+q0wgAN8ZdxHk6US5oDqrPhl9oZkObAXLZ5U4nHXeSpyWrjF3g30in2CcMUmXRn+NgpKaJrLzfhiVTX6C+2Z6xlQd38FAAVZG6KCi1vAlpE2HBfkJDbmmGQo4KHwILNuEec1fkn48Om0yixm9wtRttrSQ3Xamx5ofwoN84HVQulBGYG5i/OsfjGHR5xUvHyZjj0uH6jovSAB0cRR9P8+igJk6kBtZxLJdOvOkwwioRY0g4/e6054h7l6Jg8KL7nRt9wEHThF5FxLJ/yoYOo8JEGbR8b3XG6Nj9iPQTGb5Cji9k8FNAOOBzcZAqNMtbWBSJv6eVyMVN1c7qWWHVmG7IiB4mknX2xam+h65occVxc21scBIs4q3qcAE9';const _IH='a93550a374c46f2f3a33ca8a1c952d370a549ed97a6eb1fac23a9f9c1fd8857a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
