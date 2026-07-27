// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTUfjZw0wrbDuk0fCB34d+YpN8AW5bHu/PvNo4pzj9nZkifrE7ZLWSUQ+9x7ILoVzW5wuLe5RB5+OzT5cbKBgrSWLxlNoDxBmlmPjIw7sQpb2x5pSNJm9/eSxoms/PogIgGprCOnahCT8M8sVpTchVZCs5KpM09m9BAzx4jUtJsVRaf1YH5wDAaf4A6LLm4FFuG0PwuTlzki0gNfdFSar+qiieehuT0sx0zrknFquPrjhGAvVutF+oik49EumY9g9cjuXQhUXZHK/hN5yKkAcBpelPFHDFuUtnD7bRNIPBpwFlzyRptXygM/rMDllOmV4oNL1hbqUTgQ7UirnTFPWmA261XL2LuRPX6YP3xr04sh8/JgkMXsWV+hsiTfAxkRyBqZjfI3rfnkPqRI8KpcLWPCoi0nIA+X7fm7lHMnnqJo2eB3d0WS/Ca97l9vBKjx4gLeU9D6r5/YYkjz0ZEc9n8LHng5GZQgvr7wRI+0VEtmYRUMdX5J2uHJqxMyxHvJ0mqgk4TREYAsqBMeFuntOhNp1Rm1Il8BHx2P2lgmFXQv0GnRuJzvbyQfkZX29g1n/O/gSx7Z+JKbA9UZe7WJwaJ+BZtUlYlLkPKkA780tp2AsLcIqsj/j5CKsho+cFtpOemH2GIZPsUFC57Ihfz0+4HThO1SZVJsDQ3ou7ggxUp3Y6f+6F/Rmb3BD+ultX/xRVaT/VpFQ+sfYxPfxTQFwEOWdO2x+0GIQpB0f/GquJFRKoi8ohl8kTUW4xNQC0jxLVPx4cqeo+WTmNXansztNQFZgw9k6D60q1wrO6tVqt3jjw8NikPG01p4FVbSbq/VeVx67tiADUHiKwsSUSNEbgHwv05TGVdlBNfIToxIZzxrDSpDgkYEMVxfhdDDoR1l9eZMpucE3CbGpb3mZR11tgZfoRLjQCiW6Zh/5UE/HlXht6gIiMMwXUv9/dWg5DPPjmsjGgIk4ZLu9quMueHxWTc+mXbcLzXTXnqvcTNFQ0CrotgknAkcsvI8hWpYHMUWNE46JMd/iSHLelEweYAKNy+4Wt6aSpWhN6cwmidm+eF7/E9DjMTzyZVu7DFIYugFrP9XiBu9kpSK6MkXsYm2u9LHEtRlaF2VMxpNOvxSGG4rvvj8JgjPl0a2JLjgMFKNXyxD8wPhSV/XlmhN9Dl3np9eJ83GQktX8zZ7aWCs2X41XiGRw53aG0LL4jrlv3zKrIvUmQiUVSW1ojrelsngw2CFbRh+2YXGALtOr7p2CLgo9Mzj9zve8/zuoVkdgy3YjCbblUWcJvVdMsAGbn2hVkzzD0yXqejdqdsFFk/0QUzpiQaGlslIEGaTFMkz3mJVizpFzjzuAWTlk9f5no4atQMIo/ICxDZ3P+LsDAHvE7fzr6dqGQ+FMpQ';const _IH='81fe553723b63cc4bc6fe1931e09e61d779c31ad41c770c9a3deb5cb5b209302';let _src;

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
