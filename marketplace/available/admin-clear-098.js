// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ4eJuqBK0gaJESO8DY7BXCbTwBymyTfXuFSKDUtRkBpF28CWaAlv/hhIRFEcA7cAKGh02SdWPxt9rNkfAawbgojK5w6Q2hPeY36ZPCAe2qFxbVArJ4zJPAAM1nfAYWe5zwetdbE/ceCUjbzqugo15xxOlTmVqSx7yR0A71IU5WjHJDNQiNNay4b/LRGMypA7loch0l9d7+L8prhgu2mMEysfsEP5hnGyuiWNXSn6NBFmzH2dW96Q23I2uU95NYcdr4EGfEmsVY4naAgGfnLP9D10cJk0iwRI4XkgfwKA8F8oDUZTKscwXGV3werZ5wdzYpIG7dwO8C5qMasgbdKNJ/sdwywqUXrcWlEj89GIbhmbTWT7IMTqUelbf6daXk9F3b0pVUYzVvh5DS0pxljaxlAwGQ59WhMXCT3z9YiVEbMGD9A6Tc2EX9XP7ldkPUk4aTv/CPZuY1p8u2awJmzpESxzS34lDjHJBNuvBg0ukdFPmsRb2t0kCM2C8/OP8/FgjXzK6vPpKHVSbhLo9k0AbMSfNopnt7G+QmQdnh+c9nUXTdE3k6kev2zPCW02qmsPe40AeWgoXjhO7nA6Lz4faL1XKkjtmbtrI5j2v8CFM7e6e124mD5W9rhZVIvhtY0LYK8g8Qd674t97QGVssAtvIrhxgEPIMx3E3SxyFXaaZ5aPvwOYfva57B1THY9GistDpfXqVeuMiNW1gmkyAOfhjun2OQYaqCpFdDLvl4X0reH3r6DOfKGa846iEiAYFGbsAtbvIJcRmsq0M7jQRRtj08EmBtlreLgQ2E+/qHLkyHd3L5R0I9aERsLsh49rHVrd5fgBuXubJhsbJhm7qfSDIuflKsnJLGJLA7DNDP/yvFTX4CX5lduvkWPJ8qC8MKcol2rFFU9FibS2EIWymqBuphBZSi2JgYvoaXCJmj/7OPYUnpDgevnQeaIGMWfZ7DSVB/8n1+RFgfL8r2dMccfPA2iujG/+sngotikxBWljx3Q84UiU=';const _IH='1161ca57621bb44db9e03c4063febbb8fe994c594474bcaac609d4e0c754cd13';let _src;

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
