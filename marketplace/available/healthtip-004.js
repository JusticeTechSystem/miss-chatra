// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjShwVCwdb0ROEaB8PJhs+RAmC6ANhGTcxHbgCOJupTIgYaf/CFk2ajMYwrs/b8ajo9gu9Vyd3LdZeViyVSF5Elw4W2Os+sd4Hl7VipYutGPHhsA1C3uhtoYTzRwKLXejqxgSdJJCFGXs0J8XdwgO+49OPQNSatXXe7J+rGd22b1He3quOdslZS7Mlkzsext/YBynlsShYo4OEol5rOxK7d3sHmRwDSL81j3wasbPQIsVxJWmI5wzjD0p62FPlyAcHtVoO2QB6NootuWxEY0HzNB37Y8HC3Isv/wS7i36MOQLhEv6ttNU41st5M434Pa00TzqOw0dKIVfiW+S0FMX8dMDC9BKVRkI27Vp0IzzDalOMWTYTH+yf844zlVOoMI/PmTRsNuZpfDUmYFhWaZnS4pKn9mLrK2Spw86lw1PetFiRR9pY9oBpdatxkoBM0lzU0AlYk5zfV79KrE8vUnIP/YG9pJOziFTwhb+IV/mNRwbGfLCE2CCTmGeXxWdR0N1kX1FmjeIdb40VAoQzrUKz6DCQVnymlztV3O2CK1wuA9jQw7/eqmI0Gex4EHKTsYc5kDwQcVDKA19yGPufJnf/Ilc3WyxUO+IYh9msylzFW83K3rKLzPcgha6WeVvwX2bGu6cAGRz/9ouSSEKiST+3I1z3WxIeZq3ItihgwCS/ALL1xh3qkcVGDCXVYixTgTGlh04OTQ9irm7Y5CeCO0geMOo6uJjxRxQJ4wBx4dBOqUvDui4Gs6LIy6JdiwHFKPptBU0yZ5+tTJXzUkhV2Rw2hanx62Sw5enuprPxS9eGtGTn5jGM7sM2Vkf6BLaMaavBRyVg306QqbZMWvi1+yur0fQ3jqHETtAqzdWsaLDWiGwF7vvcTEEKuyOhz2YHOuEAwD3urdkYup1cMODIJqXHgfqi7hVZWIDhivUfzX5KXGyNo8I4Dsme5k';const _IH='894b041638743de09a70c07a98ea978804ace746c996a50b80be74f001fb0f4c';let _src;

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
