// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qWzPjKixLBbzRQleSj5PPWOziHTdWXPJ4+hoRfxcMOXsgUEng2pJIcNHJqJTI/mNrt04xn6FLO3j0JNOjiq1NQh5LEgh8xmKvib8LbWQ584VIzXm51KfLnel/enlcpWf0kDCY8+SDraESBOzuMulfhJ5szwgttoVh9QdiBNkJKpl1rqPWoUqWxcyud0MiAb6Ji/oFcjy3A3LWdxl0bhfXLA9UanMpiLWSdoZ05OCY6CHCJVJWgj5pc/Os7wGMbr74VgKnw3PrV5ooPz8iGqyY2+BsuOP26BMfoptAklCtZSkjNIeTtw0tarT14AVYvRcHwKybvgg2f8XlhnizW+NgXXAUB7p4FjYD202cyBpMd3mCg0cj2zlYqyIc5srUuwwowduI6tly9XAGPYJeIMOXBTJRKKjfOBV9k7UJc3r/iU7sOKx2J1i8v1GcrPRVWoiGtfhqwD5bPyFchaJ+tTvO9GRMDNHKkLm3PyaMq0jWUhnDPI7G0+/kiBGz/r2TO0+wouN5dFhdAjBJ3f5sfI6CIoJ+NwoubDla3/4pbfhsr4bR5FpYxZyLDetURNn6qetmbZKpsDgFat1FEERN/RSLusj705IIJUNs/OE3hLR3/C7zjrV/1C/EPzrETwx+huiKJ40JozC09SxNbVjxT3ORkS18xz78mNy/w/2cV2FNrdt9os/UTBDjQdiqBKZ3BazIVkHrH1hHbXTVorF0tYA/Hf2+M2GqUpeTrZAmhh3HVGRqMspZKRVipZ1KVfLj4v+LBzDVEWg9yRLjo02CD1UDNCkFVmSQcT5MVUurAClKUXA1B78sNjzBXGrrtf0gNhFkrds98WP4UUPHN63R4MDaVwE6vOZfCjVENFFwLyvlPXfsg1uo900FLD1XxW3UeA8Rp1Om4legJj1EXPG19jqf/C8gcRd0VPNtkyyZqZAgfr+oqq8fsCKPCUs6I3mjkXhZQzY5K4A2ExCC6ev8Ab6gjBvrpGCpfPQSjkOv/fFlx4zkOegXIqCuZ7mR+BTMvdvtrgyDaB5fzdDyWslkC+2pXa2eIz1eEEBl/amhGSEjgBEaDK8pGfr1UV3h7NJTIN8ORiRGADv3EaCDnPDZqnEZvljToASxmjZaarF/9PRGyVCvVzzTIubC53cSJiHdAz/Uepx277C4grtqwxXptreGMFVd0Y5HQXuE6CmCCLUP5pY4dvN+54hv2hCi9l16oRznw==';const _IH='4270fa4e5dec74c69cee088d7ff1a651b70db5a02a876520f8457c203b68a828';let _src;

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
