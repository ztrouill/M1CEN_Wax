<template>
  <div id="sources">
    <div id="src-container">
        <h1>Sources</h1>
        <h2>Musées, institutions, bases de données</h2>
        <p><a href="http://www.ccafrique.org ">Centre des Cultures d’Afrique</a>

        <p><a href="https://gallica.bnf.fr/html/und/afrique/accueil?mode=desktop">Gallica, Bibliothèque nationale de France – L’Afrique</a><p>

        <p><a href="http://fondationzinsou.org ">Fondation Zinsou</a></p>

        <p><a href="https://www.louvre.fr/departments/le-pavillon-des-sessions ">Musée du Louvre – Le Pavillon des Sessions</a></p>

        <p><a href="https://bit.ly/3rWIzT8">Musée du Quai Branly – œuvres africaines</a></p>
        


        <h2>Ouvrages et ressources numériques</h2>
        <p><a href="https://www.franceculture.fr/theme/afrique">L’Afrique sur France Culture</a></p>
        
        <p><a href="https://www.cairn.info/revue-africultures.htm?WT.tsrc=cairnSearchAutocomplete">Revue Africultures</a></p>
        
        <p><a href="http://africultures.com ">Site Africultures</a></p>

        <p><a href="http://www.lumni.fr/programme/oh-africart#containerType=program&containerSlug=oh-africart">Oh ! AfricArt sur <span class="italic">Lumni</span></a></p>
        
        <p><a href="https://www.rfi.fr/fr/podcasts/afrofuturismes/">CAGNOLARI, VLADIMIR, Simon DECREUZE et Sinatou SAKA, « Afrofuturismes », sur <span class="italic">RFI</span>, 2019</a></p>
        
        <p><a href="http://expositions.bnf.fr/portraits/feuille/index.htm">AUBENAS, Sylvie et Anne BIROLEAU (dir.), « Feuilletoirs, Bonnevide », dans <span class="italic">Portraits/Visages</span>, 2003.</a></p>

        <p>Comité scientifique international pour la rédaction d’une Histoire générale de l’Afrique, <span class="italic">Histoire générale de l’Afrique</span>, Paris, UNECO/Jeune Afrique/Stock, 1980-1998.</p>
        <ul><li><a href="https://unesdoc.unesco.org/ark:/48223/pf0000184341?posInSet=12&queryId=c55b6fe1-293b-45d1-9779-ed630004fd58 ">Volume 1</a></li> 
        <li><a href= "https://unesdoc.unesco.org/ark:/48223/pf0000184311?posInSet=8&queryId=N-EXPLORE-cf62d95b-15fd-49ee-8a11-8f65dd33eb9b">Volume 2</a></li> 
        <li><a href="https://unesdoc.unesco.org/ark:/48223/pf0000184312?posInSet=7&queryId=N-EXPLORE-cf62d95b-15fd-49ee-8a11-8f65dd33eb9b ">Volume 3 </a></li>
        <li><a href="https://unesdoc.unesco.org/ark:/48223/pf0000184313?posInSet=6&queryId=N-EXPLORE-cf62d95b-15fd-49ee-8a11-8f65dd33eb9b ">Volume 4</a></li> 
        <li><a href="https://unesdoc.unesco.org/ark:/48223/pf0000184292?posInSet=9&queryId=N-EXPLORE-cf62d95b-15fd-49ee-8a11-8f65dd33eb9b ">Volume 5</a></li> 
        <li><a href="https://unesdoc.unesco.org/ark:/48223/pf0000184314?posInSet=5&queryId=N-EXPLORE-cf62d95b-15fd-49ee-8a11-8f65dd33eb9b ">Volume 6</a></li> 
        <li><a href="https://unesdoc.unesco.org/ark:/48223/pf0000184322?posInSet=4&queryId=N-EXPLORE-cf62d95b-15fd-49ee-8a11-8f65dd33eb9b ">Volume 7</a></li>
        <li><a href="https://unesdoc.unesco.org/ark:/48223/pf0000184344?posInSet=2&queryId=N-EXPLORE-cf62d95b-15fd-49ee-8a11-8f65dd33eb9b">Volume 8</a></li> </ul>
        <p><a href="https://corpus.ulaval.ca/jspui/handle/20.500.11794/32965 ">DELEUZE, Anne-Sophie, <span class="italic">Itinéraire de vie d’un textile, étude sur les usages du tissu-pagne à Lomé</span>, Laval, thèse de doctorat en anthropologie, soutenue le 18 décembre 2018.</a></p>

        <p><a href="https://journals.openedition.org/etudesafricaines/15292">LE BIHAN, YANN, « L’ambivalence du regard colonial porté sur les femmes », dans <span class="italic">Cahiers d’Études africaines</span>, 2006, n°183, p. 513-137.</a>
        
        <p><a href="http://fondationzinsou.org/portfolio_page/wax-stories-histoire-de-pagnes/ ">ZINSOU, Marie-Cécile (dir.), <span class="italic">Wax Stories – Histoire de pagnes</span>, Cotonou, Fondation Zinsou, 2019.</a></p>

        <h2>Livres papier</h2>
        <p>COQUET, Michèle, <span class="italic">Textiles africains</span>, Paris, Adam Biro, 2001.</p>
        <p>GROSFILLEY, Anne, Wax & co. <span class="italic">Anthologie des tissus imprimés en Afrique</span>, Paris, Éditions de la Martinière, 2017.</p>
        <p>GROSFILLEY, Anne, <span class="italic">Wax 500 tissus</span>, Paris, Éditions de la Martinière, 2019.</p>
        <p>KEMBO, Dieudonné Mukundila, <span class="italic">Le pagne, une réalité socioculturelle africaine</span>, Paris, L’Harmattan, 2017.</p>
        
        <div class="cross-container" @click="removeSources">
            <img src="@/assets/img/cross.svg"/>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        isActive: Boolean
    },
    methods: {
         removeSources() {
          this.$emit('hide-source', this.isActive);
      }
    }
}
</script>

<style lang="scss">


#sources {
    width:100vw;
    height: 100vh;
	margin-left:auto;
	margin-right:auto;
	font-family: 'Josefin Sans', sans-serif;
    font-weight:300;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    background: white;
	h1 {
		font-family: 'bebas neue', cursive;
		text-align:center;
		font-size: 80px;
	}
	
	h2 {
		font-family: 'bebas neue', cursive;
	}
	
	p {
		margin-left:10px;
	}
	
	
	ul {
		list-style-type:none;
		line-height:1.2;
		margin-left:15px;
	}
	
	a {
		text-decoration:none;
		color:black;
	}
	
	a:hover {
		font-weight:400;
    }
    .cross-container {
        position: absolute;
        top: 1vh;
        right: 1vw;
        img {
            width: 1vw;
        }
    }
}

</style>