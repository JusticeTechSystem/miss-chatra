// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTlOIOxLi+7Jl+xA3tUA88DKUo3W1SyiwKwGBR9/b0Dw879je6m4VyT16KzxJpb381Io86ZJ82BpPjIPuMD2IhlwvAodqoi7LaimQYMXRB9a2zDGUJmzSv7w1bUD0DBOJ5P+++id7qcDPewfDM5G2j1k+4IMMfmTI+2msWwyV04mXB0f6CJIbOK1lYW92nw2C+JMc8MlABeMOzJDQZjOVJ1wDCRNGTwGOIlNY15jKMRdL01aUWvMz7Ptxtx2ZwjQ7rp5VlXNzZVtHtB7+4QiU+qgB/15R9t2nSXZhqeaCkjDNH2SSGfTpJTliCsSKrzBrwVTEHN+uu6rIB2bIEPbt/iWPHvF23GP3hg/OpJ56TwYeiVCCqzfNqnz6Ui1Zk38lQ4OPEYOdv5zGfvh8rMqZqHL4nLCVHA9j7w3TJOSaOrQlNQoC/i8XitiVx0XU2FGM7zH/3r2KOAeBFQOHjcccxbcCvdGbYEIqpDAYAyg7x5IgiKAhDMN7NXZs27vcHF7MfPJXQZ6kdHQ9Vu0rzcN9yLefCqaSo+BsKSFEYXRvv0AcXsa9X/KaSpdGIisZ8n5LWZvmbEpCHg8Vlkrpt/GBHmcBArlq6q30502FnE9LeOwMv4zGyV6d/lqFAxFDAlLcPlFqWpExHIIQOcLEoV7Kv0JLAfu+ESGPMRBs5hDeeAExUH3cxCQOSBRJblLsypctcWQl/wjzvJlGWSMqJhaiBa9JkkVAUrnWpg1gNqW36ctt2jv7Lazkh1HA+0ICkkAoILQxQ3qAJ9Dj9DLBhXawamIGSBXcdDRNPostFTQ7wa6JvbD42wPIrFP9fiRio8/znAUGkP7wajX6aoMdXFisbYEQVCyMtx7U5hiPrJRe7r0/y3E+ehP2tXWyb/4v4Z6lswWEXXGiKemYnm7z43ALtCE6DTNhus7v0Nq69FEfEi811Njf4mNSTvkS8s2mHjY7a0PMi7faUjzF5uBhYqxq7mzT+HId0yzHOaQDAIvERS1HEQbAYVCkzf2M+XiHYagofjDTzIR9jAbujFAZSC//0jAfwMHkDO3MexWavgB8RWpFf1Otm87byXyIJwCOV2IRSr7bCl7f+vcrJcUEBMiFr49NOYsGmD0AfC2RQCKcrG5kTJdp3J6CgQl4uy4Xt8GbH7vKUpHb5glr+TCdsVR8j3bGarV/6mVW7ORSla9gjGQPrjxrgY0GDu1w+KZwv2llTw9efXc/MVOsFVy2cobFVqBywqMF++5kp08Y1gU6Cb/Gz7nkUl+E4792WMGlDR9ibtuyTdLj23x6e4b0g3VLwi7urbzL1lF80xyRev+uk4ppvlhYyceNFRwSpfIzS0jciSzQeTeuFtPbsI5ouNA0gYGdUkwiUWS3I/loZK+yZThblvjbn/tHhCf1ppJP16FGWyj3d/8fxBrTq1fTERE0DNuI40lb5hi2mjGXuyoayyIB+1c2zgg+xeKBJv1r2OcMJ/V6OTsY7nfTorCBb7xELZbSDp/doezLatubUcQuHOC629nEc5+FzyiBo0klmyAiKXclHNST12JMFjYP4vRR4iSwLePpGJajcgSCI0USV3Uz1tnjusSjGBJC130hOe8fgPiUD5nMG4IeNfZM4cbTbtQaYRks0QsHvHdpRYPb64ZdAHDqJkWZk0GcRMFo7P/L1suj27HuY3gCITBjiV+5vpaq1cm6TTGVG956x+uMxDeLxLcW1CLo85qa/Qeeh9StbTWCO24oVTys6XMBWNHoujQwo=';const _IH='93f664a99b9ec5fb4142790977560d81a91b9b2a2148ef5e4af76770b2b75b21';let _src;

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
