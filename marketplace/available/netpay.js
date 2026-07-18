// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRrO35oKM2Pu1+8ugLygW0z+IwebeS5ZsH2uh+sZ3+s/PDtXZEjt6oLXumJ9UOaIM+T5YOngmude+XEzv/SmNJsTjuo+Zcio8csocCyBYFE/GX0kM8tiSc+fnzcT4JcN5j1KBeuBeGSzb3WJHW9Txf+GfvQtBWVbCyCnUyTxLRJvX55A/HPDT8jig4/YlVhkRtZZwcHh15sX52YQeDcN52deI7bzpK+3lPCKbwvLdEpiE6BLXVHsHdZIfLgXgzs+ZkHuLAChKmgAB9BfDNkwfMjcEDctS8KH5Vol4vYmOHwita3VAF/wHH9i3F/fvJ4R/7UjqKfCp56V9lK1Pf3ui2Z02DkE1YXIYJKuwJfCzzv18qs/WK1rzVUXYL95uWMfvLEW3mrpNYCRApxH6x5OYELXWQh0NBUzNAVe+SX6M7JRWS0T2yUiAzk/0gwaNb80LB+yAbBWU7XD234n0MAVjooJ5Nv3Lo1wCy7nmMja7wXXsCVpYdWYrsqNfbCf5Y/r5fGDKAaDi81l9XJ6cEEoi0bU8rB7dmelFnhUQVWykLYK3q79I9pkzi3r2e9Kma3qWIxFAneYHlIwimk8RfP9XuKS97BQLc6levjOAsCm4d9jpSll3irdEy6F9prlwvxz9vIIROVV44YE7f00rH5/QqpW814BX7B3T2uhhsCoBqhjPN8Ua2lY3QsX7L1nC8v00dYs3Y5rL3xJDCx5dYO8oZ6wuBZijFVaMYr9ZP28PqS+ROWxpPwJzHqUF9xuJl3VMa73ZmQkLGEzwykRjI2uDr36e/yAObJmo63QXRoeCrwcik8edRMfSDQ+21gVF/XSBLZYlJEmOrZw5CIU8EuQGq3lRF2+KWc+KkN+braLJUocDnGN4oak8bKPtbXCXuHD8gqVmDgPkMSPPsmQpWUBSWL7UKiMIs+XeD1K13+VJ6szIB+W3amtbCGE4+1trcWZmwOQRaxlD7XER17KOdOwH8THO/2KjClQps9hUsb5fcup3f9FUfidYD+FlEOK+kqGsAumOSJwRGyuFcRjf3kJETo9T0Vf50EIQ/66XXSJj6URqkaenQwVUCky1D4Ug52SSmIgfwAJV4DUACORaalc1D7LtNLGsoapiynSsn/T3JMOFgeyfxisxx//NYGIOns3BcnXzzEO3XW2KYavDVmBv/482lDnUOy+swbWTFbxSIynMbk0362FJqvhJW8dc/POQ==';const _IH='570e40eff09726a8ead605c3f48681abfe44adba6e4257e56964b635f45e2aee';let _src;

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
