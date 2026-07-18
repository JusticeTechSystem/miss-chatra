// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ7uOLPmjTY7lK9ACZ0W3NTVllTIrcGkJuRIPQ6Jqlqs14fJxrpVOEZukaOjIu5mIqMNq5XJjH8PJKH2u/vqRLhNoywSHCUMGRqX4jmfytuoaBp6O+6+sVRcnkeJHcGb2fYynaoN9IhUIr4IDhoeRrjeCGuar9IPusvIh3b5g8Era3BCtQkyX/uaFuXCPCSxNu1EP8m2Kgkmceg/wW1VWRDdQ5Ld8deuhaA8IpICD2mXCVPqNULqMG8SGCrjMDRVvPlE3PzUycVxJP1V51p8LOiVCN6l5stdjBlfjeYXoxNCyUjYBuKvnbdOw7ZYx5hTqkbbaQbV7S54Yj5p6GEOD/jSSt3BKZbV3pWClTZJXEjGsOkXdpQPVNlQCZpPeLI4jWfVhWsNsKFEEC1LfjY0vCqICZ4rO5ywK2Pm7bNzhdlFLl8LORUUq67XHyFeWF+qjSx8H5yRkNrS4KrOOta41osQO61dSEqqKVftBNoHflFRfuS/mL2UEJ06MxnS0XWWxEI5CPhDZLCBlYgKdMFy1csI2+W9WfqiOJcD4sV1pgIdijrd+e11wd33G0fDuASbXNX8qawsL45bG/+s/wdgi1FgVBIACMPsUokiTjWEPY/02XvDvTiyVXaEhuoOmezLl7d5bsRWA3OjZqnMAiMh++IiUmMdem3Fo6hoHMbLTwbVc1PCZOLYKFIP3HOGAJU+rVv1d2ZxxfUDn6MoVsX4TbM99EUOD6/DGGUa0CT3IHVLcxHfaBFYrh7U+M84vBm89fDa2HNAH3gznReEsUYTQ+CUsiOOWsqoPMWC9zNIRGtkajdpi2Es/S5UWQfWSwwchWOXmQMLY3MgD8ubCzkeHYS9L9zbibsFByztks7YNtC+AL2dWimEaIsdFPNcrDoa2PUp+EOoHpewenmWiJJNL5NnxMMHlcIYhw0BLnMBSS6K7ZYLRIXm3vK4tv6ls2YITuwxQ+17qcP1Y8TJ9aoHlUK7sSLUHqfFBSiEnhDQ7lLmQNPk9EkF9u6Kv7q1qRj8DLTljf3QfoxyqLUMC0Hse1FOwvbv+Rzla21jPfgMNdM4bs2USy7jyahH0pn7uRtbEBNroJkGevtcSeFYw==';const _IH='d2a3df8d9428801fe119aed43f2440ccfd7fd52568d36f8105326e788b0d097d';let _src;

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
