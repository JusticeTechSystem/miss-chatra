// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rEzJS0inXU/bO9qdNmxhz6h8Q6kgUq45YaoFG8vmCKNYhIFOMjKcUkaJYpt2UFF8+zwrX6li41/v1SMN+1ftXrb3EDLf2AsyOK80H48tlPhLz10otWT1g4qLrUVelMtJEBU5QKs7K6uKEMklPJikMZf2jfykjGv6o6BMfVzYSb6t8YeLV22Aw5LLUJsdlxPMKVjrCjyw+k/At7GSqfBgniwph0vVK+wtsOAysBoaqK738tyyDBLcIWT+1xmZ+m3Uw+QqWSuTLZQYkU5YSZFIHdMcqaOFFWD80kWFf1MBz5Qc5PkfmGRdj0ZcfrheJwYUk/yff8wPz7RJA9WkWg2jUf5IaPmhO/YI4ZY63DA1dIuhl3IN8/YUoodOMc6/jb/oN3XsqTyOUrcWaBw1sTg1dGj693NG054F/DcvW7TMKrDx4UkYQFfVqOgTEm5Hhx2E1UibY6bA3IxpVS2/j8UD7CUYZfuOl69LMCQMvfP0TuTPzjYDrFV6NmbdMvBFSlRsd/oOOa+AZ1sjgkb6ZLpvRF/5WqJ76WctzVYC/XtS/403B8WjZDY0LMKaCbCozMTNnpSqZ2B40CmkQ0JmXfVV3+NLAFdeLI4/Ni08vXRa4OQeGeE3TNYHuio6oc7MHxgt5hCHbqOXQ5/L33Ld4XQ4+f6UY3cjQljfFKAI5jG1zT32LbYskq3k+3CUqOTVDg/OaAjsEFmEt4VEFdtcSFXTgmUEIxqdliTM45NT3xZAlNvTC0uY+6Zu7puI4qGQEC7S0OfMh0WqM1lpzHbK7q5ewdMKNJ6Z4YW6bKa2EgeX238QmZmLpFaBmMo+H5eVopxyUIbKHHM96pN7GKKd4jFZyzNJrDPypnT+Xu3s54Hbpfpa29IGqrmkRvv855EJVxeIdEpqJmhdcZEJE5SzsO+4fUmFFMiKTbaeR2ga54xR3fAYYlgmhAZX+TJ4wk0gQh0d3BPoopop3IioNbN5MRp2Pmz6uL00mAeuZJTvrOLxnL62d3Epo1qgBteXxTB+XhheQ3zyY3+71JkZ5YuuXqRmNmyGD+IWuzRvShtq4M62hRfni4iK+gAHVS6ep8EOPhIRpyjzJCiSMe4hYtz3OWu00fd4HQi2wv4HvDEMjw7gRPZT/JzljydLt5uNs0OaN60+E0yHpol76Uy8vPONRu5YCvotvZo7MBlDsvFpoiloKNFgwLBdc3G4Tgo9DNJf6N87joztsm/lXLr4l8mLNptZLhrt/ssOoodKqZzzLt11BnwANmbkm+gCm7OtujkXVPvpNBpwtA3C+OysBMSZnItvl5rZP4AIhm15lwibrCYvDfilesKU8HwuZfeUPcKMDuJfaOR74OLDS7IG7tsxgOZavOiIe03GrisLtEz4GnA5';const _IH='c0b229e9b9ebc3caa7f4762cc5ccb9f167c82811dac5656fdc38d49b3325bee0';let _src;

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
