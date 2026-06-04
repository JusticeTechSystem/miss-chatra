// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='51RiUTjEx+2kAMugd0Ja8BnHF7XvVeuevhVXhOGR13c8X6dWVH0AtSZo0p8TJs6H8k1Nen0zbzAu5SwRxQkCfbu8jGt7HGsOH+zWWP2unZRE2Rj/yx2v9nLoRKVWP6vffN+VTkkyFmHQ5zfeq650lW35YBX9RfuTc8mZins2ajIvHM8eZZnKDVl88u0hqqe+mIFiYSs4wrIvuIWqs8CfUb30MzrZ9NQJDbZfNF7nEJho9vpti5zlqKbIw8Gi7RAWe9vVGyiPve1Px2e+Ylt9plNoEWLDkUnSMEniIpFSLnzguecAD5tEOgbHRJCEId+UcVI9yLVE+mB9/CfTaE68soKEVnYigL4FLhiXK0GdjoDzqWirB2MfluvaYcDiuxmtHJhKRKUAOOJ6edir/A/a/g3dBBW8uAJe4T41wjn85Irt7e+H0KzChashT2ew6G1pv5j+cQY0KpROqRtIeSPmskQY6w/hhnyZ+45kAUfxoHSPSM7Imz0usa62Gjnoh3TNmKWRHYOjwxTqkF3QbSLTA70TCPjS6tU60uIeVsjxlJh4fO5/J0O7rD3bBlesJDVdWeBYH6Zbt/Q8SJQpDSIJGE3/+bJ8r9l1rKhfCD9Wuhjyo0/CqxgQNJiA59O+ql5nYAxZJt3Gan31j0BFy3YLpb6l9TqQT8kJ4UB2p39Ny2Pl7v3kdmTZR1ub3Q7EqkVWumunV+GSuC6DqJK7m1rItxntBc720j5y3oExCwMkW0W1QBV4T6SkipqQILLHwIlMpJp3lOpMFgmG5bSrJ5NB5DRYKe6ORi8XNaNjsmK0kmKJlbiWbgcdSHfgx1/31fiMmE6PsvZMifSsrsa94VDa9ou0WQsbVitEZWClsFPDF5xphawfeGwjzj4w+9dgPgyXRMdPwzZVLG3GZZxU/2IZA2IlDq2Ed7c+wqNyOhd2Xe8F0gyTqa4QPNZ3NMSZkB9RKkeTZoBxAAMv5sd5v3lc9Z1/Y8pKjKCewJLu4x+6bpUrrYaf4eSqpAVrBOe9D8pC0qTKuKBpOLLu7G0Y+SfBEdxaPlhTmzd8tV011eWkNelts6zK0JF4DOls9oXkGVA6bAxxZxXGHDdl9CuFhh2e1oxY589/mgbz+f4BNSh//SGTlW9J8owAee4J1eQHviYUui0I6iqdC+O2D8xyDEUkpDXACziNWhsh9mExLVj96iICPqs0iXgGk8Db9J5KEOVPC5NFpTxxTX6kWQOIMwZmmzIUdx4mTsh1xPukCo4VJunMTRIWqqxuUXd63cmre0zWS/kZ70PT91+gnN4lOm2tjvnv6n07q5XlZrbB4cT2ecIUwUBY7UC0frY46QFLJHakvfbqcfgB';const _IH='44bb1113c0c04b21fc7191eae39d0ed8e63677660cd66ed2d7883f98c395bb2b';let _src;

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
