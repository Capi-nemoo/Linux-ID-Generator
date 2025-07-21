'use client';
import { useState } from 'react';
import TopBar from '../components/TopBar';

export default function ManifestosPage() {
  const [selectedManifesto, setSelectedManifesto] = useState<string | null>(null);

  const manifestos = {
    gnu: {
      title: "The GNU Manifesto",
      author: "Richard Stallman",
      year: "1985",
      content: `What's GNU? Gnu's Not Unix!

GNU, which stands for Gnu's Not Unix, is the name for the complete Unix-compatible software system which I am writing so that I can give it away free to everyone who can use it. Several other volunteers are helping me. Contributions of time, money, programs and equipment are greatly needed.

So far we have an Emacs text editor with Lisp for writing editor commands, a source level debugger, a yacc-compatible parser generator, a linker, and around 35 utilities. A shell (command interpreter) is nearly completed. A new portable optimizing C compiler has compiled itself and may be released this year. An initial kernel exists but many more features are needed to emulate Unix. When the kernel and compiler are finished, it will be possible to distribute a GNU system suitable for program development.

GNU will be able to run Unix programs, but will not be identical to Unix. We will make all improvements that are convenient, based on our experience with other operating systems. In particular, we plan to have longer file names, file version numbers, a crashproof file system, file name completion perhaps, terminal-independent display support, and perhaps eventually a Lisp-based window system through which several Lisp programs and ordinary Unix programs can share a screen.

GNU is aimed initially at machines in the 68000/16000 class with virtual memory, because they are the easiest machines to make it run on. The extra effort to make it run on smaller machines will be left to someone who wants to use it on them.

Why I Must Write GNU

I consider that the Golden Rule requires that if I like a program I must share it with other people who like it. Software sellers want to divide the users and conquer them, making each user agree not to share with others. I refuse to break solidarity with other users in this way. I cannot in good conscience sign a nondisclosure agreement or a software license agreement.

For years I worked within the Artificial Intelligence Lab to resist such tendencies and other inhospitalities, but eventually they had gone too far: I could not remain in an institution where such things are done for me against my will.

So that I can continue to use computers without dishonor, I have decided to put together a sufficient body of free software so that I will be able to get along without any software that is not free. I have resigned from the AI Lab to deny MIT any legal excuse to prevent me from giving GNU away.

Why GNU Will Be Compatible with Unix

Unix is not my ideal system, but it is not too bad. The essential features of Unix seem to be good ones, and I think I can fill in what Unix lacks without spoiling them. And a system compatible with Unix would be convenient for many other people to adopt.

How GNU Will Be Available

GNU is not in the public domain. Everyone will be permitted to modify and redistribute GNU, but no distributor will be allowed to restrict its further redistribution. That is to say, proprietary modifications will not be allowed. I want to make sure that all versions of GNU remain free.

Why Many Other Programmers Want to Help

I have found many other programmers who are excited about GNU and want to help.

Many programmers are unhappy about the commercialization of system software. It may enable them to make more money, but it requires them to feel in conflict with other programmers in general rather than feel as comrades. The fundamental act of friendship among programmers is the sharing of programs; marketing arrangements now typically used essentially forbid programmers to treat others as friends.

The purchaser of software must choose between friendship and obeying the law. Naturally, many decide that friendship is more important. But those who believe in law often do not feel at ease with either choice. They become cynical and think that programming is just a way of making money.

By working on and using GNU rather than proprietary programs, we can be hospitable to everyone and obey the law. In addition, GNU serves as an example to inspire and a banner to rally others to join us in sharing. This can give us a feeling of harmony which is impossible if we use software that is not free. For about half the programmers I talk to, this is an important happiness that money cannot replace.

Richard Stallman
1985`
    },
    cypherpunk: {
      title: "A Cypherpunk's Manifesto",
      author: "Eric Hughes",
      year: "1993",
      content: `Privacy is necessary for an open society in the electronic age.
Privacy is not secrecy. A private matter is something one doesn't
want the whole world to know, but a secret matter is something one
doesn't want anybody to know. Privacy is the power to selectively
reveal oneself to the world.

If two parties have some sort of dealings, then each has a memory of
their interaction. Each party can speak about their own memory of
this; how could anyone prevent it? One could pass laws against it,
but the freedom of speech, even more than privacy, is fundamental to
an open society; we seek not to restrict any speech at all. If many
parties speak together in the same forum, each can speak to all the
others and aggregate together knowledge about individuals and other
parties. The power of electronic communications has enabled such
group speech, and it will not go away merely because we might want it
to.

Since we desire privacy, we must ensure that each party to a
transaction have knowledge only of that which is directly necessary
for that transaction. Since any information can be spoken of, we
must ensure that we reveal as little as possible. In most cases
personal identity is not salient. When I purchase a magazine at a
store and hand cash to the clerk, there is no need to know who I am.
When I ask my electronic mail provider to send and receive messages,
my provider need not know to whom I am speaking or what I am saying
or what others are saying to me; my provider only need know how to
get the message there and how much I owe them in fees. When my
identity is revealed by the underlying mechanism of the transaction,
I have no privacy. I cannot here selectively reveal myself; I must
_always_ reveal myself.

Therefore, privacy in an open society requires anonymous transaction
systems. Until now, cash has been the primary such system. An
anonymous transaction system is not a secret transaction system. An
anonymous system empowers individuals to reveal their identity when
desired and only when desired; this is the essence of privacy.

Privacy in an open society also requires cryptography. If I say
something, I want it heard only by those for whom I intend it. If
the content of my speech is available to the world, I have no
privacy. To encrypt is to indicate the desire for privacy, and to
encrypt with weak cryptography is to indicate not too much desire for
privacy. Furthermore, to reveal one's identity with assurance when
the default is anonymity requires the cryptographic signature.

We cannot expect governments, corporations, or other large, faceless
organizations to grant us privacy out of their beneficence. It is to
their advantage to speak of us, and we should expect that they will
speak. To try to prevent their speech is to fight against the
realities of information. Information does not just want to be free,
it longs to be free. Information expands to fill the available
storage space. Information is Rumor's younger, stronger cousin;
Information is fleeter of foot, has more eyes, knows more, and
understands less than Rumor.

We must defend our own privacy if we expect to have any. We must
come together and create systems which allow anonymous transactions
to take place. People have been defending their own privacy for
centuries with whispers, darkness, envelopes, closed doors, secret
handshakes, and couriers. The technologies of the past did not
allow for strong privacy, but electronic technologies do.

We the Cypherpunks are dedicated to building anonymous systems. We
are defending our privacy with cryptography, with anonymous mail
forwarding systems, with digital signatures, and with electronic
money.

Cypherpunks write code. We know that someone has to write software
to defend privacy, and since we can't get privacy unless we all do,
we're going to write it. We publish our code so that our fellow
Cypherpunks may practice and play with it. Our code is free for all
to use, worldwide. We don't much care if you don't approve of the
software we write. We know that software can't be destroyed and that
a widely dispersed system can't be shut down.

Cypherpunks deplore regulations on cryptography, for encryption is
fundamentally a private act. The act of encryption, in fact, removes
information from the public realm. Even laws against cryptography
reach only so far as a nation's border and the arm of its violence.
Cryptography will ineluctably spread over the whole globe, and with
it the anonymous transactions systems that it makes possible.

For privacy to be widespread it must be part of a social contract.
People must come and together deploy these systems for the common
good. Privacy only extends so far as the cooperation of one's
fellows in society. We the Cypherpunks seek your questions and your
concerns and hope we may engage you so that we do not deceive
ourselves. We will not, however, be moved out of our course because
some may disagree with our goals.

The Cypherpunks are actively engaged in making the networks safer
for privacy. Let us proceed together apace.

Onward.

Eric Hughes <hughes@soda.berkeley.edu>
9 March 1993`
    },
    guerilla: {
      title: "Guerilla Open Access Manifesto",
      author: "Aaron Swartz",
      year: "2008",
      content: `Information is power. But like all power, there are those who want to keep it for
themselves. The world's entire scientific and cultural heritage, published over centuries
in books and journals, is increasingly being digitized and locked up by a handful of
private corporations. Want to read the papers featuring the most famous results of the
sciences? You'll need to send enormous amounts to publishers like Reed Elsevier.

There are those struggling to change this. The Open Access Movement has fought valiantly
to ensure that scientists do not sign their copyrights away but instead ensure their work
is published on the Internet, under terms that allow anyone to access it. But even under
the best scenarios, their work will only apply to things published in the future. Everything
up until now will have been lost.

That is too high a price to pay. Forcing academics to pay money to read the work of their
colleagues? Scanning entire libraries but only allowing the folks at Google to read them?
Providing scientific articles to those at elite universities in the First World, but not
to children in the Global South? It's outrageous and unacceptable.

"I agree," many say, "but what can we do? The companies have the copyrights, they make
enormous amounts of money by charging for access, and it's perfectly legal — there's
nothing we can do to stop them." But there is something we can, something that's already
being done: we can fight back.

Those with access to these resources — students, librarians, scientists — you have been
given a privilege. You get to feed at this banquet of knowledge while the rest of the
world is locked out. But you need not — indeed, morally, you cannot — keep this privilege
for yourselves. You have a duty to share it with the world.

You need to take information, wherever it is stored, whether in closed databases or
password-protected files, and copy it and share it with the world. You need to take
copyright-protected materials and upload them to file sharing networks. You need to
download scientific journals and upload them to peer-to-peer networks. You need to fight
for Guerilla Open Access.

With enough of us, around the world, we'll not just send a strong message opposing the
privatization of knowledge — we'll make it a thing of the past. Will you join us?

Aaron Swartz
July 2008, Eremo, Italy`
    }
  };

  return (
    <>
      <TopBar />
      <div className="manifestos-page">
      <div className="manifestos-ascii">
        <pre className="manifestos-title">{`
███╗   ███╗ █████╗ ███╗   ██╗██╗███████╗███████╗███████╗████████╗ ██████╗ ███████╗
████╗ ████║██╔══██╗████╗  ██║██║██╔════╝██╔════╝██╔════╝╚══██╔══╝██╔═══██╗██╔════╝
██╔████╔██║███████║██╔██╗ ██║██║█████╗  █████╗  ███████╗   ██║   ██║   ██║███████╗
██║╚██╔╝██║██╔══██║██║╚██╗██║██║██╔══╝  ██╔══╝  ╚════██║   ██║   ██║   ██║╚════██║
██║ ╚═╝ ██║██║  ██║██║ ╚████║██║██║     ███████╗███████║   ██║   ╚██████╔╝███████║
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝     ╚══════╝╚══════╝   ╚═╝    ╚═════╝ ╚══════╝`}</pre>
      </div>
      
      <div className="manifestos-intro">
        <p>Fundamental texts that shaped the digital rights movement and open access philosophy.</p>
      </div>

      {!selectedManifesto ? (
        <div className="manifestos-list">
          <div className="manifesto-item">
            <div className="manifesto-header">
              <span className="manifesto-icon">[📜]</span>
              <span className="manifesto-name">gnu_manifesto.txt</span>
            </div>
            <div className="manifesto-meta">
              <span className="manifesto-author">by Richard Stallman</span>
              <span className="manifesto-year">(1985)</span>
            </div>
            <div className="manifesto-desc">The foundational document of the free software movement and the GNU Project.</div>
            <button 
              className="tui-button" 
              onClick={() => setSelectedManifesto('gnu')}
            >
              [READ MANIFESTO]
            </button>
          </div>

          <div className="manifesto-item">
            <div className="manifesto-header">
              <span className="manifesto-icon">[📜]</span>
              <span className="manifesto-name">cypherpunk_manifesto.txt</span>
            </div>
            <div className="manifesto-meta">
              <span className="manifesto-author">by Eric Hughes</span>
              <span className="manifesto-year">(1993)</span>
            </div>
            <div className="manifesto-desc">The foundational text of the cypherpunk movement, advocating for privacy through cryptography.</div>
            <button 
              className="tui-button" 
              onClick={() => setSelectedManifesto('cypherpunk')}
            >
              [READ MANIFESTO]
            </button>
          </div>

          <div className="manifesto-item">
            <div className="manifesto-header">
              <span className="manifesto-icon">[📜]</span>
              <span className="manifesto-name">guerilla_open_access.txt</span>
            </div>
            <div className="manifesto-meta">
              <span className="manifesto-author">by Aaron Swartz</span>
              <span className="manifesto-year">(2008)</span>
            </div>
            <div className="manifesto-desc">A call to action for open access to scientific and academic knowledge.</div>
            <button 
              className="tui-button" 
              onClick={() => setSelectedManifesto('guerilla')}
            >
              [READ MANIFESTO]
            </button>
          </div>
        </div>
      ) : (
        <div className="manifesto-viewer">
          <div className="manifesto-viewer-header">
            <div className="viewer-title">
              <span className="viewer-icon">[📖]</span>
              <span className="viewer-filename">{manifestos[selectedManifesto as keyof typeof manifestos].title}</span>
            </div>
            <div className="viewer-meta">
              <span>Author: {manifestos[selectedManifesto as keyof typeof manifestos].author}</span>
              <span>Year: {manifestos[selectedManifesto as keyof typeof manifestos].year}</span>
            </div>
          </div>
          
          <div className="manifesto-content">
            <pre>{manifestos[selectedManifesto as keyof typeof manifestos].content}</pre>
          </div>
          
          <div className="viewer-controls">
            <button 
              className="tui-button-secondary" 
              onClick={() => setSelectedManifesto(null)}
            >
              [BACK TO LIST]
            </button>
          </div>
        </div>
      )}
      </div>
    </>
  );
}
