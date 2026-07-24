// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR9DikcO7XqOeRud5lr+0mJ3my64E5mauS6Fkn25DwBF/5oZ6/4YWz2tR/kW9YNmyP9F9wlwLCcwXuRTQv+XiQLOaoPA3GNctoDGdvnmEUprPUpF3JuC01BSqT1kIqGHNApQ6GPrMuY8fZzJGeusl4EgjCW9rIujhXr0SUIYjGEhyrVpmQ0mM5Fmxfme4fIWnn0txp+rKqVXF3RkoCV8xDjGT+CZIyS+r4oxgU5UeoVwLebyOzTf6kiue+xyV8lmHOyXKVPALdVMso5Fo4OVpR57ssXF0W7gSBPWbDUz6ePOYX4h7LTDNmVX0fmQ4CxUiixyED6EjNXksOKG9WbbBIh1FECcdh2ke4oQBGHUEZt/KkUpvMlWqqGDG/oEqx5pn/DE4jTFOaXbYv/RWdNu4C+xBkIVUfCI4yhBb4JHFnKq9Ll7aA2w1YAyAXMLg5VijBBSSZ0vrSpp04SBKsKQBYuq9RuB3rUh//yrZtWQysJXHF9pOeP09xet/cPFb1wLP9JdaqBb4sx7N2NZBonEnCmixEJAnGLghlUOcUIJXJtLyTvTuu0fHACZ215n9WJGN7vTxSFTodo8JW466zFI9ypO6iK+cdCxdtX1fhxmaFG4ntAHhtQuoOTn+Xngh2yWRsMZ2U2OXD2FT7rwHjNc/0mprDRH6wcsMxlT7ZrJI2FJLx9jKPXuTrwB0cXB4yjnG7PF9S4MuWy/ZU+s6IjmwnKwJD+s7+IMCNPjrgQd1+d9XXCYSumHmqk2FcpXmM2pH4H652RQctB/JT4B/yAd5bNbB2iDQJD9k6TNEwRAcx7GgBCogSvgG7Y/2m8usi5jJMdOM74I3ZVmP6cLDRRxXsHQ844q22TGP4XlIWrxRveHIFGDMd54lesr7lPEZ2P1vrJajX+/Gmraup7eOKE4RyB2RiNQqv5kVI3//NyURo9VP57hd8B7BCz017IkwByFwEgs/tCYeFig5Dcb3rK8nIVfpak8zHY3H/9G31MAoaZQrIkx2iEXvFjvolmJwrKxm6C+AkbkTujksA40X0klhc/i0q9CXBGMiFPMp0qaCAfJcqPFnI4UOVROd6v5rh95GaRtb06vEhLtVPhn9+BFb6UDbj7DBVpfsvmLjXBAgPvC/nHef6EdjVJyT+IXknfxkJ8MuLA6TQ7ISjmpTHbbNwtI2rH2igjvD6SaGoHye1YCr0bScRox1HI668oSSyQFMq22YnAYpljzsfJW8GOkrEknxvglCIqkzuDW3Uca7i1daxg3xKJHfTQYpy45rN5OuxIlsTKm2WrA4Aa4G3qFSiasJWNVi7ZMsaTNS5/F3vEeFD2lWFN6k0xGY/EcpEHUFzns2nYBQFdzcvfSrrQlhdnc+IC9NMmfB1pesd4M9WY7IcTGFYFqxnEQWEpfo3E8qWN+dKlhO6B0uHcuDDYGYZ+zEmkZnDLGd5JZDXm8VwnLvsVuVgAq45/NPrUNBBiy+5byFVYQrJMvi1UAizsEj5AEd9ZFORP/LKTX4I419BC1DjWgkTxHNxd1tkmlEi/t8AKiXQ+sETkjj4evSfIQ+If8IfU3baLmPOm99XFRslTANzkqi0RjzodrbuETRtSNeANyK5HckdFt2x5DB/WtwF8XumGO3OAOogWO8X9rPw9WmBJZ3bs7ALoSvKG0vP4TDpn3ORth921ihsDp14EwK72HEiQyLHS5R9SEzdB/qMNEYimigGt4AAwLg==';const _IH='90ae106bac3d05dbe2e850a67f167443c203a47b4da5a1ceca52452f81d902af';let _src;

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
